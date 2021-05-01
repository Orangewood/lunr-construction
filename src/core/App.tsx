import React ,{ useEffect, useState } from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from "../common/components/Loader";
import PrivateRoute from './routes/PrivateRoute';
import BackgroundImage from './components/admin/Background';
import AdminMenu from './components/admin/AdminMenu';
import Client from './components/admin/ClientSelect';
import Logo from './components/admin/Logo';
import Foreman from './components/admin/ForemanScreen';
import ChangePin from './components/admin/AdminPin';
import KioskConfig from './components/admin/KioskConfig';
import AdminHome from './components/admin/AdminHome';
import AdminQuickBooksAuth from './components/admin/AdminQuickBooksAuth';
import AdminAuthCallback from './components/admin/AdminAuthCallback';
import AdminLogin from './components/admin/AdminLogin';
import CameraScreen from './components/kiosk/CameraScreen';
import KioskHome from './components/kiosk/KioskHome';
import ClockScreen from './components/kiosk/ClockScreen';
import API from './api'


const App = (props) => {
  let [loader, setLoader] = useState(true);

  useEffect(()=>{
    async function init(){
      await API.initHeaders(props?.admin?.token.access_token)
      setLoader(false)
    }
    if(props?.admin?.token){
      init()
    }else{
      setLoader(false)
    }

  },[]);

  const privateRoutes = [
    {
      exact: true,
      path: '/dashboard',
      render: () => <AdminMenu />,
    },
    {
      exact: true,
      path: '/set-background',
      render: () => <BackgroundImage />,
    },
    {
      exact: true,
      path: '/client',
      render: () => <Client />,
    },
    {
      exact: true,
      path: '/set-logo',
      render: () => <Logo />,
    },
    {
      exact: true,
      path: '/foreman',
      render: () => <Foreman />,
    },
    {
      exact: true,
      path: '/kiosk-config',
      render: () => <KioskConfig />,
    },
    {
      exact: true,
      path: '/changepin',
      render: () => <ChangePin />,
    },

  ]
  
  if(loader)
  return <Loader fullPage/>
  
  return(
    <>
      <Switch>
        <Route exact path="/" component={AdminHome} /> 
        <Route exact path="/oauth/login" component={AdminQuickBooksAuth} /> 
        <Route exact path="/oauth/callback" component={AdminAuthCallback} /> 
        <Route exact path="/signin" component={AdminLogin} />
        <Route exact path="/kiosk-home" component={KioskHome} />
        <Route exact path="/kiosk-user" component={CameraScreen} />
        <Route exact path="/kiosk-check" component={ClockScreen} />
      </Switch>

      <Switch>
        {privateRoutes.map((r, index) => {
          return (
            <PrivateRoute 
              key={`r-${index}`}
              path={r.path} 
              isAuthenticated={true}
              render={r.render}
            >
            </PrivateRoute>
          )
        })}
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps)(App);

       
