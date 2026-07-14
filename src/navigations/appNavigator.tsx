import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTapNavigation from './bottomTapNavigations';
import UserData from '../screens/userData';
import UserDetails from '../screens/userDetails';

export type AppStackParamList = {
    Home: undefined;
    UserData: undefined;
    UserDetails: {
        id: string;
    };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={BottomTapNavigation} />
            <Stack.Screen name='UserData' component={UserData as React.ComponentType<any>} />
            <Stack.Screen name='UserDetails' component={UserDetails as React.ComponentType<any>} />
        </Stack.Navigator>
    );
};

export default AppNavigator;