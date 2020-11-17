import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Logo = (props): JSX.Element => {
    return(
        <Link to={{pathname: '/signin',}}>
            <div className={`logoKiosk ${!props?.admin?.logo ? 'default' : ''}`} style={{ backgroundImage : `url(${props?.admin?.logo})`}}>Logo here</div>
        </Link>
    )
}
const mapStateToProps = (state) => ({ admin: state.admin });
export default connect(mapStateToProps)(Logo);