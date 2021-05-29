import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { DomainPath } from './../App';

function Logout(){
    const path = useContext(DomainPath);
    
    localStorage.clear();
    return (<Redirect to={`${path}/`} />) ;

}

export default Logout;