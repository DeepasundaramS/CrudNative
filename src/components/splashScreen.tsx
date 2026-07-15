import { useEffect } from "react";
import { Text, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../util/types";

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const SplashScreen = () => {
    const navigation = useNavigation<LoginNavigationProp>()
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2500);
    }, []);

    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <MaterialIcons name="person-pin" size={70} color="#ffffff" className="bg-[#6366F1] rounded-3xl p-4 mt-10" />
            <Text className='text-4xl font-bold text-black-500 mt-10'>User Admin</Text>
            <Text className='mt-2 text-xl text-gray-500'>Manage users with ease</Text>
            <View className='mt-[16rem]'>
                <View className='bg-[#c1aafa48] w-[20rem] rounded h-[0.50rem]'>
                    <View className='bg-[#6366F1] rounded m-0 animate-[load_3s_ease-in-out_infinite]'><Text></Text></View>
                </View>
            </View>
        </View>
    );
}

export default SplashScreen