import React from 'react';
import {Switch} from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Logon from '../pages/Logon';
import Pacient from '../pages/Pacient';
import Hospital from '../pages/Hospital';
import DoctorList from '../pages/DoctorList';
import Page404 from '../pages/Page404';

export default function Routes() {
    return (
            <Switch>
                <MyRoute exact path='/' component={Login} />
                <MyRoute exact path='/logon' component={Logon} />
                <MyRoute exact path='/cliente' component={Pacient} />
                <MyRoute exact path='/doctorlist' component={DoctorList} />
                <MyRoute exact path='/hospital' component={Hospital} />
                <MyRoute path='*' component={Page404} />
            </Switch>
    );
};