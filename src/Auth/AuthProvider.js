import {
    AUTH_GET_PERMISSIONS,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERROR,
    AUTH_CHECK,
  } from 'react-admin'; 

  export default (type, params,props) => {
  
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        if (username === 'user' && password === 'password') {
            localStorage.setItem('role', 'user');
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
          }

        if (username === 'admin' && password === 'password') {
            localStorage.setItem('role', 'admin');
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }
        localStorage.setItem('not_authenticated', true);
        return Promise.reject();
    }
    if (type === AUTH_LOGOUT) {
        localStorage.setItem('not_authenticated', true);
        localStorage.removeItem('role');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const { status } = params;
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('not_authenticated')
            ? Promise.reject()
            : Promise.resolve();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        const role = localStorage.getItem('role');
        return Promise.resolve(role);
        
    }
  
    return Promise.reject('Unknown method');
  };