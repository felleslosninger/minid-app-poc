
import React, {Component} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


const Separator = () => (
    <View style={styles.separator} />
);

class ConfirmLogin extends Component {

    render() {

        const {notification} = this.props;

        return (
            <>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>{notification.body}</Text>
                            </View>
                            <View>
                                <Button title="Godkjenn" color="blue" />
                                <Separator/>
                                <Button title="Avbryt" color="blue" />
                            </View>
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
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default ConfirmLogin;
