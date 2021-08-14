import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeStack';

const Stack = createStackNavigator();
const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
function AuthRouter(props) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
            behavior={Platform.OS == 'ios' ? 'padding' : null}
            enabled
        >
            <MyStatusBar backgroundColor={'#1F4273'} barStyle={true ? 'light-content' : 'dark-content'} />
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator headerMode="none" initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </KeyboardAvoidingView>
    );
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 45 : StatusBar.currentHeight;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default AuthRouter;