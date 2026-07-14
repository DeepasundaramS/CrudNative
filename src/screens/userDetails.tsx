import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from "../components/header";
import { useState } from "react";
import ModalPopup from "../components/modal";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { adminUser, userInfo } from "../store/slices/authSlice";
import { storage } from "../util/storage";

const UserDetails = ({ route }: any) => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const [modalVisible, setModalVisible] = useState<Boolean>(false);
    const registeredUser = useSelector((state: any) => state?.auth?.users)
    const admin = useSelector((state: any) => state?.auth?.loginUser)
    const user = route?.params?.user

    const handleDelete = () => {
        const updatedUsers = admin?.users?.filter((users: { id: string }) => users?.id !== user?.id)
        const updatedUserData = registeredUser?.map((adminUser: any) =>
            Number(adminUser?.id) === Number(admin?.id) ? {
                ...adminUser,
                users: updatedUsers
            } : adminUser);
        const updatedAdmin = { ...admin, users: updatedUsers }

        dispatch(userInfo(updatedUserData))
        dispatch(adminUser(updatedAdmin))
        storage.setItem("loginedUser", updatedAdmin)
        storage.setItem("SignupedUser", updatedUserData)
        navigation.navigate('Home', { screen: 'Users' })
    }
    return (
        <SafeAreaView className="flex-1 gap-5 bg-white px-5">
            <Header
                iconOne="arrow-back"
                title="User Details"
                iconTwo=""
            />
            <View className="items-center gap-8">
                <View>
                    <Image
                        style={{ width: 140, height: 140, resizeMode: "center" }}
                        source={require('../assets/images/Male.png')} />
                </View>
                <View className="items-center gap-4">
                    <Text className="font-bold text-3xl">{user?.name}</Text>
                    <View className={`px-3 rounded-full ${user?.status === 'Active'
                        ? 'bg-green-100'
                        : 'bg-red-100'
                        }`}>
                        <Text className={`text-lg font-semibold ${user?.status === 'Active'
                            ? 'text-green-600'
                            : 'text-red-600'
                            }`}>
                            {user?.status}
                        </Text>
                    </View>
                </View>
            </View>
            <View className="w-full items-center justify-between h-[55%] pt-4 gap-2">
                <View className="w-full h-auto flex-column border border-gray-300 rounded-xl px-5">
                    <View className="flex-row justify-between items-center w-full py-5 border border-white border-b-gray-300">
                        <View className="flex-row items-center gap-6">
                            <MaterialIcons
                                name="mail-outline"
                                size={30}
                                color="#000000"
                            />
                            <Text className="text-xl font-medium">Email</Text>
                        </View>
                        <Text className="text-lg font-semibold text-gray-500">{user?.email}</Text>
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
                        <Text className="text-lg font-semibold text-gray-500">{user?.phone_number}</Text>
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
                        <Text className="text-lg font-semibold text-gray-500">{user?.role}</Text>
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
                        <Text className="text-lg font-semibold text-gray-500">{user?.joined_date}</Text>
                    </View>
                </View>
            </View>
            <View className="flex-row gap-4 items-center pb-10">
                <TouchableOpacity
                    onPress={() => navigation.navigate('UserData', { user: user })}
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
                MessageOne={`Are you sure you want to Delete user ${user?.name}`}
                MessageTwo="This action cannot be undone."
                btnOne="Cancel"
                btnTwo="Delete"
                reject={() => setModalVisible(!modalVisible)}
                accept={handleDelete}
            />
        </SafeAreaView>
    );
};
export default UserDetails