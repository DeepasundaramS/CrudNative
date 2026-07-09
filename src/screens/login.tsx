import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from '@react-native-vector-icons/fontawesome-free-solid';
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }: any) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <SafeAreaView className="bg-white flex-1 items-center gap-8 justify-center">
            <MaterialIcons name="person-pin" size={70} color="#ffffff" className="bg-[#6366F1] rounded-3xl p-4" />
            <View className="flex items-center gap-2 justify-center">
                <Text className="text-4xl text-black font-bold">Welcome Back 👋</Text>
                <Text className="text-gray-500 font-semibold text-2xl">Login to your admin account</Text>
            </View>
            <View className=" w-full px-7 gap-2">
                <Text className="font-bold text-lg">Email</Text>
                <TextInput className="p-3 border-gray-500 border rounded-xl text-lg"
                    placeholder="Enter your email"
                />
            </View>
            <View className="w-full px-7 gap-2">
                <Text className="font-bold text-lg">Password</Text>
                <View className="flex-row items-center border border-gray-500 rounded-xl overflow-hidden">
                    <TextInput className="flex-1 text-gray-500 p-3 text-lg"
                        placeholder="Enter your password"
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity className="pe-5" onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Icon
                            name={passwordVisible ? "eye" : "eye-slash"}
                            size={18}
                            color="#919191"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity className="w-full px-7">
                <Text className="font-bold text-lg text-[#885CF6] text-right">Forgot Password?</Text>
            </TouchableOpacity>
            <View className="w-full px-7">
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}
                    className="bg-[#6366F1] flex items-center p-4 justify-center rounded-xl">
                    <Text className="font-semibold text-center text-white text-xl" >Login</Text>
                </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center">
                <Text className="font-bold text-lg text-gray-500">Don't have an account? <Text className="font-bold text-[#885CF6]"> Contact Admin</Text></Text>
            </View >
        </SafeAreaView>
    )
}
export default Login