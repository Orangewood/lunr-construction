const express = require('express');
const fetch = require('node-fetch');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { URLSearchParams } = require('url');

const router = express.Router();

const API_SERVICE_URL = 'https://rest.tsheets.com';
const API_SERVICE_BASE = 'https://rest.tsheets.com/api/v1';
const {
  TSHEETS_CLIENT_ID,
  TSHEETS_CLIENT_SECRET,
  TSHEETS_REDIRECT_URI,
} = process.env;

module.exports = () => {
  router.get('/login', async (req, res) => {
    const qs = new URLSearchParams();
    qs.set('response_type', 'code');
    qs.set('client_id', TSHEETS_CLIENT_ID);
    qs.set('redirect_uri', TSHEETS_REDIRECT_URI);
    qs.set('state', 'MY_STATE');

    res.redirect(`${API_SERVICE_BASE}/authorize?${qs.toString()}`);
  });

  router.get('/oauth/callback', async (req, res) => {
    const { code, state } = req.query;
    if (!code) {
      res.end('Bad request');
      return;
    }

    const response = await fetch(`${API_SERVICE_BASE}/grant`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: TSHEETS_CLIENT_ID,
        client_secret: TSHEETS_CLIENT_SECRET,
        code,
        redirect_uri: TSHEETS_REDIRECT_URI,
      }),
    });
    if (!response.ok) {
      res.status(400).json(await response.json());
      return;
    }

    const data = await response.json();
    res.json(data);
  });

  router.use('/face-detect', require('./face-detect')());

  const proxyOptions = {
    target: API_SERVICE_URL,
    changeOrigin: true,
    logLevel: 'debug',
  };
  const { BASE_URL } = process.env;
  if (BASE_URL && BASE_URL !== '/') {
    proxyOptions.pathRewrite = {
      [`^${BASE_URL}`]: '',
    };
  }
  const proxy = createProxyMiddleware(proxyOptions);
  router.use('/api', proxy);

  return router;
};
