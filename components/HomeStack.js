import * as React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Breakdown from './Pages/Breakdown';
import Percent from './Pages/Percent';
import Workout from './Pages/Workout';
import MaxOut from './Pages/MaxOut';

const Tab = createBottomTabNavigator();

export default function Home({ navigation, route }) {
    const { height } = Dimensions.get('window');
    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    tabStyle: { marginBottom: 3, backgroundColor: '#1F4273' },
                    activeTintColor: '#ECECEC',
                    inactiveTintColor: '#00ff001C',
                    labelStyle: {
                        fontSize: 13,
                    },
                    style: {
                        backgroundColor: '#1F4273',
                        borderTopWidth: 0,
                    },
                }}
                screenOptions={{ tabBarVisible: true }}
                initialRouteName={'breakdown'}
            >
                <Tab.Screen
                    name="breakdown"
                    component={Breakdown}
                    options={{
                        title: 'Breakdown',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name={'list'}
                                size={20}
                                style={{ marginBottom: -3 }}
                                color={'#ECECEC'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="percent"
                    component={Percent}
                    options={{
                        title: 'Percent',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name={'percent'}
                                size={20}
                                style={{ marginBottom: -3 }}
                                color={'#ECECEC'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="maxout"
                    component={MaxOut}
                    options={{
                        title: 'Max Out',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name={'bolt'}
                                size={20}
                                style={{ marginBottom: -3 }}
                                color={'#ECECEC'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="workout"
                    component={Workout}
                    options={{
                        title: 'Workout',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name={'superpowers'}
                                size={20}
                                style={{ marginBottom: -3 }}
                                color={'#ECECEC'}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
}