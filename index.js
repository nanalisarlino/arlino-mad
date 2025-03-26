/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import signin from './signin';
import App from './App';
import unklab from './unklab';
import {name as appName} from './app.json';
import signinrc from './signinrc';
import registration from './registration';
import RestAPI from './RestAPI';

AppRegistry.registerComponent(appName, () => RestAPI);
