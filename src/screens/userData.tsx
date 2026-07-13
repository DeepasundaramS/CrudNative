import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from "../components/header"
import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-element-dropdown';
import { regexValidation, validationErrors } from "../util/validationMsg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { adminUser, userInfo } from "../store/slices/authSlice";

type RootStackParamList = {
    Dashboard: { screen: string }
}
type NavigationProp = StackNavigationProp<RootStackParamList>

type UserDataProps = {
    route: {
        params: {
            user: {
                id: string
                name: string,
                email: string,
                phone_number: string,
                role: string,
                status: string
            }
        }
    }
}

const data = [
    { label: '--- Select Role ---', value: 'none' },
    { label: 'User', value: 'User' }
]

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

const UserData = ({ route }: UserDataProps) => {
    const dispatch = useDispatch()
    const users = useSelector((state: any) => state?.auth?.users)
    const admin = useSelector((state: any) => state?.auth?.loginUser)
    const navigation = useNavigation<NavigationProp>()
    const editUser = route?.params?.user

    const [user, setUser] = useState({
        name: editUser?.name || "",
        email: editUser?.email || "",
        phone_number: editUser?.phone_number || "",
    })
    const [value, setValue] = useState(editUser?.role || 'none');
    const [selectedId, setSelectedId] = useState(editUser?.status || "InActive");
    const radioButtons = useMemo(() => ([
        {
            id: 'Active',
            label: 'Active',
        },
        {
            id: 'InActive',
            label: 'InActive',
        }
    ]), []);

    const handleChange = (field: string, value: string) => {
        setUser((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const handleSubmit = () => {
        if (!user?.name?.trim()) {
            Alert.alert("Validation Error", validationErrors.name.required)
        } else if (regexValidation.regex.nameRegex.test(user?.name)) {
            Alert.alert("Validation Error", validationErrors.name.InvalidName)
        } else if (!user?.email?.trim()) {
            Alert.alert("Validation Error", validationErrors.email.required)
        } else if (!regexValidation.regex.invalidEmailRegex.test(user?.email)) {
            Alert.alert("Validation Error", validationErrors.email.validEmail)
        } else if (!user?.phone_number?.trim()) {
            Alert.alert("Validation Error", validationErrors.phone_number.required)
        } else if (!regexValidation.regex.invalidPhoneNumberRegex.test(user?.phone_number)) {
            Alert.alert("Validation Error", validationErrors.phone_number.InvalidPhonenumber)
        } else if (!value.trim()) {
            Alert.alert("Validation Error", validationErrors.role.required)
        } else if (!selectedId.trim()) {
            Alert.alert("Validation Error", validationErrors.status.required)
        } else {
            if (editUser) {
                const updatedUser = users.map((adminUser: any) =>
                    adminUser?.id === admin?.id ? {
                        ...adminUser,
                        users: adminUser?.users?.map((users: { id: string }) => users?.id === editUser?.id ? {
                            ...users,
                            name: user?.name,
                            email: user?.email,
                            phone_number: user?.phone_number,
                            role: value,
                            status: selectedId,
                            joined_date: formattedDate
                        } : users),
                    } : adminUser);
                const updatedAdmin = updatedUser?.find((loginUser: { id: string }) => loginUser?.id === admin?.id);
                dispatch(adminUser(updatedAdmin))
                dispatch(userInfo(updatedUser))
            } else {
                const newUsers = users?.map((adminUser: any) =>
                    adminUser?.id === admin?.id ? {
                        ...adminUser,
                        users: [...(adminUser.users || []),
                        {
                            id: Date.now(),
                            name: user?.name,
                            email: user?.email,
                            phone_number: user?.phone_number,
                            role: value,
                            status: selectedId,
                            joined_date: formattedDate
                        },]
                    } : adminUser);
                const updatedAdminData = newUsers?.find((loginUser: { id: string }) => loginUser?.id === admin?.id);
                dispatch(adminUser(updatedAdminData))
                dispatch(userInfo(newUsers))
            }
            navigation.navigate('Dashboard', { screen: 'Users' })
        }
    }
    return (
        <SafeAreaView className="flex-1 bg-white gap-5 justify-between px-5">
            <Header
                iconOne="arrow-back"
                title={editUser ? "Edit User" : "Add User"}
                iconTwo=""
            />
            <View className="items-center">
                <View>
                    <Image
                        style={{ width: 140, height: 140, resizeMode: "center" }}
                        source={require('../assets/images/Male.png')} />
                    <TouchableOpacity className="w-10 h-10 rounded-full items-center justify-center absolute bottom-0 right-0 bg-[#6366F1]">
                        <MaterialIcons
                            name="photo-camera"
                            size={22}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full gap-8 px-2">
                <View>
                    <Text className="font-bold text-xl mb-2">Full Name</Text>
                    <TextInput className="p-4 border-gray-500 border rounded-xl text-xl"
                        value={user?.name}
                        onChangeText={(text) => handleChange('name', text)}
                        placeholder="Enter Full Name"
                    />
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Email</Text>
                    <TextInput className="p-4 border-gray-500 border rounded-xl text-xl"
                        value={user?.email}
                        onChangeText={(text) => handleChange('email', text)}
                        placeholder="Enter email"
                    />
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Phone Number</Text>
                    <TextInput className="p-4 border-gray-500 border rounded-xl text-xl"
                        value={user?.phone_number}
                        onChangeText={(text) => handleChange('phone_number', text)}
                        placeholder="Enter Phone Number"
                    />
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Role</Text>
                    <TouchableOpacity className="p-4 border-gray-500 border rounded-xl text-xl">
                        <Dropdown
                            data={data}
                            labelField="label"
                            valueField="value"
                            value={value}
                            onChange={item => setValue(item.value)}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Status</Text>
                    <RadioGroup
                        layout="row"
                        labelStyle={styles?.labelStyle}
                        radioButtons={radioButtons}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                    />
                </View>
            </View>
            <View className="w-full px-2">
                <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-[#6366F1] p-4 rounded-2xl">
                    <Text className="text-white text-2xl font-bold text-center">{editUser ? "Update User" : "Save User"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default UserData