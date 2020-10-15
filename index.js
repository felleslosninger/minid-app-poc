import {Navigation} from "react-native-navigation";
import App from './src/App';

Navigation.registerComponent('no.digdir.minidapp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'no.digdir.minidapp.WelcomeScreen'
                        }
                    }
                ]
            }
        }
    });
});