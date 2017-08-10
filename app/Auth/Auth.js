import auth0 from 'auth0-js';
import history from '../history.js';
import { browserHistory } from 'react-router-dom';

export default class Auth {
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getProfile = this.getProfile.bind(this);

        this.auth0 = new auth0.WebAuth({
            domain: 'citronnade.auth0.com',
            clientID: 'u89UeRx7_ERZX324ARiUr0Lw_kap9DoZ',
            redirectUri: window.location.origin + '/callback',//http://localhost:5000/callback',
            audience: 'https://citronnade.auth0.com/userinfo',
            responseType: 'token id_token',
            scope: 'openid profile'
        });
    }

    handleAuthentication() {
        console.log("hanlding authentication in auth now");
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                //history.replace('/home');

            } else if (err) {
                //history.replace('/home');
                console.log(err);
            }
        });
    }

    setSession(authResult){
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) * new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/');
    }

    login() {
        this.auth0.authorize();
    }
    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    getAccessToken(){
        return localStorage.getItem('access_token');
    }

    userProfile;
    getProfile(cb){
        let accessToken = this.getAccessToken();
        if(!!accessToken) {
            console.log("valid token");
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if (profile) {
                    this.userProfile = profile;
                }
                cb(err, profile);
            })
        }
        else{
            console.log("invalid token");
        }
    }
}