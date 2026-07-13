import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardView from '../components/cardView';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

type RootStackParamList = {
    Users: undefined,
    UserDetails: { user: object }
}

type NavigationProp = StackNavigationProp<RootStackParamList, 'Users'>;

const DashBoard = () => {
    const admin = useSelector((state: any) => state?.auth?.loginUser)
    const navigation = useNavigation<NavigationProp>()
    const users = admin?.users
    return (
        <SafeAreaView className="flex-1 px-5 bg-white gap-8">
            <Header
                iconOne="menu"
                title="Dashboard"
                iconTwo="notifications-none"
            />
            <View className='rounded-2xl bg-[#6366F1] w-full h-[23%] mx-auto'>
                <View className="items-center flex-row justify-between h-full mx-6">
                    <View className='flex-column justify-around h-[85%]' >
                        <Text className="text-xl text-white">
                            Total Users
                        </Text>
                        <Text className="font-semibold text-5xl text-white">
                            125
                        </Text>
                        <Text className="text-xl text-white">
                            +12 this month
                        </Text>
                    </View>
                    <MaterialIcons
                        className='mt-[52px]'
                        name="groups"
                        size={100}
                        color="#A8A9FF"
                    />
                </View>
            </View>
            <View className='flex-row flex-wrap items-center justify-between gap-y-6'>
                <CardView
                    title="Active Users"
                    value="96"
                    icon="person"
                    color="#22C55E"
                />
                <CardView
                    title="Inactive Users"
                    value="29"
                    icon="person-off"
                    color="#EF4444"
                />
                <CardView
                    title="Admins"
                    value="08"
                    icon="admin-panel-settings"
                    color="#6366F1"
                />
                <CardView
                    title="New This Month"
                    value="15"
                    icon="recycling"
                    color="#F59E0B"
                />
            </View>
            <View className='gap-3 mt-3'>
                <View className="items-center flex-row justify-between">
                    <Text className="text-2xl font-bold">
                        Recent Users
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Users')}
                    >
                        <Text className="text-xl text-violet-600 font-semibold">
                            View All
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={users}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('UserDetails', { user: item })}
                            className="items-center flex-row justify-between py-3">
                            <View className='items-center flex-row justify-around gap-6'>
                                <View>
                                    <Image
                                        style={{ width: 50, height: 50, resizeMode: "center" }}
                                        source={require('../assets/images/Male.png')} />
                                </View>
                                <View className="">
                                    <Text className="font-bold text-xl">
                                        {item.name}
                                    </Text>
                                    <Text className="text-gray-500 font-medium text-lg">
                                        {item.email}
                                    </Text>
                                </View>
                            </View>
                            <View
                                className={`px-3 py-1 rounded-full ${item.status === 'Active'
                                    ? 'bg-green-100'
                                    : 'bg-red-100'
                                    }`}>
                                <Text
                                    className={`text-md font-semibold ${item.status === 'Active'
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                        }`}>
                                    {item.status}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
export default DashBoard;