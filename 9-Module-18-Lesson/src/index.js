/**
 * Make registration
 * Make authorization
 * Build result in one ES5 bundle
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './public/index.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'bootstrap';

import registrationHandler from './registrationHandler';
import authHandler from './authHandler';

registrationHandler();
authHandler();
