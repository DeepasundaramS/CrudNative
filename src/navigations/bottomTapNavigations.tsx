import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DashBoard from '../screens/dashBoard';
import UserList from '../screens/userList';
import Profile from '../screens/profile';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();

const BottomTapNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Dashboard'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#6366F1',
                tabBarInactiveTintColor: '#6B7280',
                tabBarLabelStyle: {
                    fontSize: 16,
                },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashBoard}
                options={{ tabBarIcon: ({ color }) => <MaterialIcons name="home" size={28} color={color} /> }}
            />
            <Tab.Screen
                name="Users"
                component={UserList}
                options={{ tabBarIcon: ({ color }) => <MaterialIcons name="person-pin" size={28} color={color} /> }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ tabBarIcon: ({ color }) => <MaterialIcons name="person" size={28} color={color} /> }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={28} color={color} /> }}
            />
        </Tab.Navigator>
    );
};

export default BottomTapNavigation;