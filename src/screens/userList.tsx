import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from "../components/header";

const UserList = ({ navigation }: any) => {
    const [search, setSearch] = useState('')
    const users = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            status: 'Active',
        },
        {
            id: '2',
            name: 'Sarah Wilson',
            email: 'sarah@example.com',
            status: 'Active',
        },
        {
            id: '3',
            name: 'David Brown',
            email: 'david@example.com',
            status: 'Inactive',
        },
    ]
    return (
        <SafeAreaView className="flex-1 px-5 bg-white gap-8">
            <Header
                iconOne='menu'
                title='Users'
                iconTwo='filter-alt'
            />
            <View className="flex-row gap-4">
                <View className="flex-1 border border-gray-300 flex-row bg-white rounded-xl items-center px-3">
                    <MaterialIcons name="search" size={26} color="#999" />
                    <TextInput
                        placeholder="Search users..."
                        value={search}
                        onChangeText={setSearch}
                        className="flex-1 py-4 text-xl ml-2"
                    />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('UserData')}
                    className="bg-[#6366F1] px-5 rounded-xl justify-center">
                    <Text className="text-white font-semibold text-xl">
                        + Add User
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={users}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('UserDetails')}
                        className="items-center flex-row justify-between mb-6">
                        <View className="flex-row items-center gap-5">
                            <View>
                                <Image
                                    style={{ width: 50, height: 50, resizeMode: "center" }}
                                    source={require('../assets/images/Male.png')} />
                                {/* <MaterialIcons
                                    name="person"
                                    size={40}
                                    color="#6366F1"
                                /> */}
                            </View>
                            <View>
                                <Text className="font-semibold text-[20px]">
                                    {item.name}
                                </Text>
                                <Text className="text-gray-500 font-medium text-lg">
                                    {item.email}
                                </Text>
                            </View>
                        </View>
                        <View className="flex-row items-center gap-3">
                            <View className={`px-3 py-1 rounded-full ${item.status === 'Active'
                                ? 'bg-green-100'
                                : 'bg-red-100'
                                }`}>
                                <Text className={`text-md font-semibold ${item.status === 'Active'
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                    }`}>
                                    {item.status}
                                </Text>
                            </View>
                            <MaterialIcons
                                name="more-vert"
                                color="#000"
                                size={25}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}
export default UserList