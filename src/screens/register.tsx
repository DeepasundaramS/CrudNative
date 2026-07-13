import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from '@react-native-vector-icons/fontawesome-free-solid'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userInfo } from "../store/slices/authSlice"
import { regexValidation, validationErrors } from "../util/validationMsg"
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Register = () => {
    const navigation = useNavigation<NavigationProp>()
    const users = useSelector((state: any) => state.auth.users)
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
    const [confirmPasswordVisible, setconfirmPasswordVisible] = useState<Boolean>(false)

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = () => {
        if (!form?.username?.trim()) {
            Alert.alert("Validation Error", validationErrors.name.required)
        } else if (regexValidation.regex.nameRegex.test(form?.username)) {
            Alert.alert("Validation Error", validationErrors.name.InvalidName)
        } else if (!form?.email?.trim()) {
            Alert.alert("Validation Error", validationErrors.email.required)
        } else if (!regexValidation.regex.invalidEmailRegex.test(form?.email)) {
            Alert.alert("Validation Error", validationErrors.email.validEmail)
        } else if (!form?.password?.trim()) {
            Alert.alert("Validation Error", validationErrors.password.required)
        } else if (!regexValidation.regex.invalidPasswordRegex.test(form?.password)) {
            Alert.alert("Validation Error", validationErrors.password.InvalidPassword)
        } else if (!form?.confirmPassword?.trim()) {
            Alert.alert("Validation Error", validationErrors.confirmpassword.required)
        } else if (form.password !== form.confirmPassword) {
            Alert.alert("Validation Error", validationErrors.confirmpassword.matchPassword)
        } else {
            const updatedUsers = [...users || [], {
                id: Date.now(),
                name: form.username,
                email: form.email,
                password: form.password,
                role: 'Admin',
            }]
            dispatch(userInfo(updatedUsers))
            navigation.navigate('Login')
        }
    }

    return (
        <SafeAreaView className="bg-white flex-1 items-center gap-8 justify-center">
            <MaterialIcons name="person-pin" size={70} color="#ffffff" className="bg-[#6366F1] rounded-3xl p-4" />
            <View className="flex items-center gap-2 justify-center">
                <Text className="text-4xl text-black font-bold">Sign Up</Text>
            </View>
            <View className=" w-full px-7 gap-2">
                <Text className="font-bold text-lg">User Name</Text>
                <TextInput className="p-3 border-gray-500 border rounded-xl text-lg"
                    value={form.username}
                    onChangeText={(text) => handleChange('username', text)}
                    placeholder="Enter your Name"
                />
            </View>
            <View className=" w-full px-7 gap-2">
                <Text className="font-bold text-lg">Email</Text>
                <TextInput className="p-3 border-gray-500 border rounded-xl text-lg"
                    placeholder="Enter your email"
                    value={form.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
            </View>
            <View className=" w-full px-7 gap-2">
                <Text className="font-bold text-lg">Password</Text>
                <View className="flex-row items-center border border-gray-500 rounded-xl overflow-hidden">
                    <TextInput className="flex-1 text-gray-500 p-3 text-lg"
                        value={form.password}
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
            <View className="w-full px-7 gap-2">
                <Text className="font-bold text-lg">Confirm Password</Text>
                <View className="flex-row items-center border border-gray-500 rounded-xl overflow-hidden">
                    <TextInput className="flex-1 text-gray-500 p-3 text-lg"
                        value={form.confirmPassword}
                        onChangeText={(text) => handleChange('confirmPassword', text)}
                        placeholder="Enter your Confirm Password"
                        secureTextEntry={!confirmPasswordVisible}
                    />
                    <TouchableOpacity className="pe-5" onPress={() => setconfirmPasswordVisible(!confirmPasswordVisible)}>
                        <Icon
                            name={confirmPasswordVisible ? "eye" : "eye-slash"}
                            size={18}
                            color="#919191"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full px-7 pt-3">
                <TouchableOpacity onPress={handleSubmit}
                    className="bg-[#6366F1] items-center p-4 justify-center rounded-xl">
                    <Text className="font-semibold text-center text-white text-xl" >Register</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center gap-3">
                <Text className="font-bold text-lg text-gray-500">Already have account
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text className="font-bold text-lg text-[#885CF6]">Sign In</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>
    )
}

export default Register