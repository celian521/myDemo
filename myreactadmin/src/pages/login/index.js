import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { inject, observer } from 'mobx-react';
import { Input, Icon, Button  } from 'antd';
import FootBar from '../../components/common/footer';
import FormLogin from './formLogin';
import FormRegister from './formRegister';
import './index.scss'

@inject(({globalStore})=>({
    loginFlag: globalStore.loginFlag,
    login: globalStore.login
}))

@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'login'
        };
    }
    changeMode = e => {
        this.setState({
            mode: e
        })
    }
    render() {
        if(this.props.loginFlag){
            return <Redirect to='/' />;
        }
        return (
            <div className='login-container' style={{ height: '100vh' }}>
                <div className="login-header">
                    <img src={require('../../assets/images/aimei_logo.png')} />
                    <span>OS系统</span>
                </div>
                <div className="login-body">
                    {
                        this.state.mode === "login" ?
                        <FormLogin toRegister={()=>this.changeMode('register')} />
                        :
                        <FormRegister toLogin={()=>this.changeMode('login')} />
                    }
                </div>
                <div className='login-footer'>
                    <FootBar />
                </div>
            </div>
        );
    }
}

export default Login;
