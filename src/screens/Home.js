import React, {Component} from 'react';
import {Alert} from 'react-native';
import autobind from "autobind-decorator";
import messaging from '@react-native-firebase/messaging';

const {Navigation} = require('react-native-navigation');

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';

import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import {observer} from "mobx-react";
import {getMainStore} from "../stores/MainStore";

@observer
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: ""
        };
    }

    componentDidMount() {

        messaging().onMessage(async remoteMessage => {
            console.log('Message received. ', remoteMessage);
            // Alert.alert("Test title", remoteMessage.notification.body);
            this.openConfirmLogin(this.props.componentId, remoteMessage.notification);
        });

        messaging().getToken().then(token => {
            this.setState({token});
            console.log("*** token: ", token);
        });

    }

    @autobind
    openConfirmLogin(componentId, notification) {
        Navigation.push(componentId, {
            component: {
                name: 'ConfirmLogin', // Push the screen registered with the 'Settings' key
                options: { // Optional options object to configure the screen
                    topBar: {
                        title: {
                            text: 'Godkjenn' // Set the TopBar title of the new Screen
                        }
                    }
                },
                passProps: {
                    notification: notification
                }
            }
        });
    }

    render() {

        const {counter, increment} = getMainStore();

        return (
            <>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header/>
                        {global.HermesInternal == null ? null : (
                            <View style={styles.engine}>
                                <Text style={styles.footer}>Engine: Hermes</Text>
                            </View>
                        )}
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Text>Message registration token: {this.state.token}</Text>
                            </View>

                            {/*<View>*/}
                            {/*<Button title="test" onPress={(e) => {this.openConfirmLogin(this.props.componentId)}}/>*/}
                            {/*<Button title="test" onPress={increment} />*/}
                            {/*</View>*/}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },

});

export default Home;
