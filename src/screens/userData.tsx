import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from "../components/header"
import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: '--- Select Role ---', value: '1' },
    { label: 'Admin', value: '2' },
    { label: 'User', value: '3' }
];

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
    }
})

const UserData = ({ navigation, route }: any) => {
    const editUser = route.params?.user
    const isEdit = !!editUser
    const [value, setValue] = useState('1');
    const [selectedId, setSelectedId] = useState("");
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Active',
            value: 'active'
        },
        {
            id: '2',
            label: 'InActive',
            value: 'inactive'
        }
    ]), []);

    return (
        <SafeAreaView className="flex-1 bg-white gap-5 justify-between px-5">
            <Header
                iconOne="arrow-back"
                title={isEdit ? "Edit User" : "Add User"}
            />
            <View className="items-center">
                <View className="w-40 h-40 rounded-full bg-gray-100 justify-center items-center">
                    <MaterialIcons
                        name="person"
                        size={70}
                        color="#6366F1"
                    />
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
                        placeholder="Enter Full Name"
                    />
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Email</Text>
                    <TextInput className="p-4 border-gray-500 border rounded-xl text-xl"
                        placeholder="Enter email"
                    />
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Phone Number</Text>
                    <TextInput className="p-4 border-gray-500 border rounded-xl text-xl"
                        placeholder="Enter Phone Number"
                    />
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Role</Text>
                    <TouchableOpacity className="p-4 border-gray-500 border rounded-xl text-xl">
                        <Dropdown
                            itemContainerStyle={styles.container}
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
                        labelStyle={styles.labelStyle}
                        radioButtons={radioButtons}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                    />
                </View>
            </View>
            <View className="w-full px-2">
                <TouchableOpacity
                    onPress={() => navigation.navigate('Dashboard', { screen: 'Users' })}
                    className="bg-[#6366F1] p-4 rounded-2xl">
                    <Text className="text-white text-2xl font-bold text-center">{isEdit ? "Update User" : "Save User"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default UserData