import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from '@react-native-vector-icons/fontawesome-free-solid';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { adminUser, isAuth } from "../store/slices/authSlice";
import { validationErrors } from "../util/validationMsg";
import { storage } from "../util/storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../util/types";

type LoginNavigationProps = NativeStackNavigationProp<RootStackParamList>

const Login = () => {
    const users = useSelector((state: any) => state?.auth?.users)
    const navigation = useNavigation<LoginNavigationProps>()
    const dispatch = useDispatch()
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })
    const [passwordVisible, setPasswordVisible] = useState<Boolean>(false);
    const handleChange = (field: string, value: string) => {
        setLoginUser(prev => {
            return {
                ...prev,
                [field]: value
            }
        })
    }
    const handleSubmit = async () => {
        const findMatch = users?.find((user: any) => user?.email === loginUser?.email && user?.password === loginUser?.password)
        if (!loginUser?.email?.trim()) {
            Alert.alert("Validation Error", validationErrors.email.required)
        } else if (!loginUser?.password?.trim()) {
            Alert.alert("Validation Error", validationErrors.password.required)
        } else if (!findMatch) {
            Alert.alert("Validation Error", validationErrors.common.Mismatch)
        } else {
            dispatch(adminUser(findMatch))
            dispatch(isAuth(true))
            await storage.setItem("IsAuthenticated", true)
            await storage.setItem("loginedUser", findMatch)
        }
    }
    return (
        <SafeAreaView className="bg-white flex-1 items-center gap-8 justify-center">
            <MaterialIcons name="person-pin" size={70} color="#ffffff" className="bg-[#6366F1] rounded-3xl p-4" />
            <View className="items-center gap-2 justify-center">
                <Text className="text-4xl text-black font-bold">Welcome Back 👋</Text>
                <Text className="text-gray-500 font-semibold text-2xl">Login to your admin account</Text>
            </View>
            <View className=" w-full px-7 gap-2">
                <Text className="font-bold text-lg">Email</Text>
                <TextInput className="p-3 border-gray-500 border rounded-xl text-lg"
                    value={loginUser.email}
                    onChangeText={(text) => handleChange('email', text)}
                    placeholder="Enter your email"
                />
            </View>
            <View className="w-full px-7 gap-2">
                <Text className="font-bold text-lg">Password</Text>
                <View className="flex-row items-center border border-gray-500 rounded-xl overflow-hidden">
                    <TextInput className="flex-1 text-gray-500 p-3 text-lg"
                        value={loginUser.password}
                        onChangeText={(text) => handleChange('password', text)}
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
                <TouchableOpacity onPress={handleSubmit}
                    className="bg-[#6366F1] items-center p-4 justify-center rounded-xl">
                    <Text className="font-semibold text-center text-white text-xl" >Login</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center gap-3">
                <Text className="font-bold text-lg text-gray-500">Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text className="font-bold text-lg text-[#885CF6]">Sign Up</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>
    )
}
export default Login