import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';
import Dimensions from '../constants/dimensions';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import withFireBase from '../components/withFirebase';
import { withNavigation } from 'react-navigation';

const SignUp = props => {
    const state = { email: '', password: '', errorMessage: null };
    const [accountDetails, updateAccountDetails] = useState(state);
    const { createAccount } = props;

    const updaterErrorMessage = errorMessage => {
        updateAccountDetails(prevState => ({
            ...prevState,
            errorMessage: errorMessage,
        }));
    };

    const handleSignUp = () => {
        createAccount({
            email: accountDetails.email,
            password: accountDetails.password,
        })
            .then(() => props.navigation.navigate('Home'))
            .catch(error => updaterErrorMessage(error.message));
    };

    const handleEmailChange = React.useCallback(
        email => updateAccountDetails(prevState => ({ ...prevState, email: email })),
        [updateAccountDetails],
    );

    const handlePasswordChange = password => {
        updateAccountDetails(prevState => ({ ...prevState, password: password }));
    };

    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            {accountDetails.errorMessage && (
                <Text style={{ color: 'red' }}>{accountDetails.errorMessage}</Text>
            )}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.inputs}
                    onChangeText={email => handleEmailChange(email)}
                    value={accountDetails.email}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.inputs}
                    onChangeText={password => handlePasswordChange(password)}
                    value={accountDetails.password}
                />
            </View>
            <TouchableOpacity style={[styles.loginButton, styles.signUp]} onPress={handleSignUp}>
                <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
            <Button
                title="Already have an account? Login"
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.inputBackgroundColor,
    },
    inputs: {
        height: Dimensions.primaryHeight,
        marginLeft: 16,
        flex: 1,
        backgroundColor: Colors.inputBackgroundColor,
    },
    inputContainer: {
        borderRadius: 30,
        borderBottomWidth: 1,
        width: wp('84.5%'),
        height: Dimensions.primaryHeight,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    signUp: {
        color: Colors.loginTextColor,
    },
    loginButton: {
        backgroundColor: Colors.loginButtonBackgroundColor,
        color: Colors.loginButtonBackgroundColor,
        marginBottom: 20,
        borderRadius: 3,
        width: wp('70%'),
        alignItems: 'center',
        padding: 5,
    },
});

export default withFireBase(withNavigation(SignUp));
