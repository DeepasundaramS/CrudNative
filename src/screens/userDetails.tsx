import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from "../components/header";
import { useState } from "react";
import ModalPopup from "../components/modal";

const UserDetails = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView className="flex-1 gap-5 bg-white px-5">
            <Header
                iconOne="arrow-back"
                title="User Details"
            />
            <View className="items-center gap-8">
                <View>
                    <Image
                        style={{ width: 140, height: 140, resizeMode: "center" }}
                        source={require('../assets/images/Male.png')} />
                    {/* <MaterialIcons
                        name="person"
                        size={70}
                        color="#6366F1"
                    /> */}
                </View>
                <View className="flex items-center gap-4">
                    <Text className="font-bold text-3xl">User Name</Text>
                    <Text className="rounded-full bg-green-100 text-lg font-semibold text-green-600 px-3">Active</Text>
                </View>
            </View>
            <View className="w-full items-center justify-between h-[55%] pt-4 gap-2">
                <View className="w-full h-auto felx-column border border-gray-300 rounded-xl px-5">
                    <View className="flex-row justify-between items-center w-full py-5 border border-white border-b-gray-300">
                        <View className="flex-row items-center gap-6">
                            <MaterialIcons
                                name="mail-outline"
                                size={30}
                                color="#000000"
                            />
                            <Text className="text-xl font-medium">Email</Text>
                        </View>
                        <Text className="text-lg font-semibold text-gray-500">user@example.com</Text>
                    </View>
                    <View className="flex-row justify-between items-center w-full py-5 border border-white border-b-gray-300">
                        <View className="flex-row items-center gap-6">
                            <MaterialIcons
                                name="phone"
                                size={30}
                                color="#000000"
                            />
                            <Text className="text-xl font-medium">Phone</Text>
                        </View>
                        <Text className="text-lg font-semibold text-gray-500">+1234 567 8900</Text>
                    </View>
                    <View className="flex-row justify-between items-center w-full py-5 border border-white border-b-gray-300">
                        <View className="flex-row items-center gap-6">
                            <MaterialIcons
                                name="person-outline"
                                size={30}
                                color="#000000"
                            />
                            <Text className="text-xl font-medium">Role</Text>
                        </View>
                        <Text className="text-lg font-semibold text-gray-500">user role</Text>
                    </View>
                    <View className="flex-row justify-between items-center w-full py-5">
                        <View className="flex-row items-center gap-6">
                            <MaterialIcons
                                name="date-range"
                                size={30}
                                color="#000000"
                            />
                            <Text className="text-xl font-medium">Joined On</Text>
                        </View>
                        <Text className="text-lg font-semibold text-gray-500">joined date </Text>
                    </View>
                </View>
            </View>
            <View className="flex-row gap-4 items-center pb-10">
                <TouchableOpacity
                    onPress={() => navigation.navigate('UserData', { user: "Deepak" })}
                    className="border-2 border-[#6366F1] p-3 rounded-xl w-[48%]" >
                    <Text className="text-[#6366F1] text-center font-bold text-xl">Edit User</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    className="border-2 border-red-500 p-3 rounded-xl w-[48%]">
                    <Text className="text-red-500 text-center font-bold text-xl">Delete User</Text>
                </TouchableOpacity>
            </View>
            <ModalPopup
                visible={modalVisible}
                icon="delete-outline"
                Title="Delete User ?"
                MessageOne="Are you sure you want to Delete"
                MessageTwo="This action cannot be undone."
                btnOne="Cancel"
                btnTwo="Delete"
                reject={() => setModalVisible(!modalVisible)}
                accept={() => navigation.navigate('Dashboard', { screen: 'Users' })}
            />
        </SafeAreaView>
    );
};
export default UserDetails