// import {Navigation} from "react-native-navigation";
const { Navigation } = require('react-native-navigation');

import messaging from '@react-native-firebase/messaging';

import Home from './src/screens/Home';
import ConfirmLogin from "./src/screens/ConfimLogin";

// Register background handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('*** Message handled in the background!', remoteMessage);
// });

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('ConfirmLogin', () => ConfirmLogin);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home'
                        }
                    }
                ]
            }
        }
    });
});