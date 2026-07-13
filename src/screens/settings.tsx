import { Modal, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/header"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";
import SettingsOptions from "../components/settingsOptions";
import HrLine from "../components/hrLine";
import ModalPopup from "../components/modal";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

type RootStackParamList = {
    Login: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Settings = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<NavigationProp>()
    const [modalVisible, setModalVisible] = useState<Boolean>(false);
    const handleLogout = () => {
        dispatch(logout(false))
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView className="flex-1 gap-8 bg-white px-5">
            <Header
                iconOne="menu"
                title="Settings"
                iconTwo=""
            />
            <View>
                <Text className="text-xl">General</Text>
                <View className="w-full items-center justify-between pt-4">
                    <View className="w-full border border-gray-400 rounded-xl px-5">
                        <SettingsOptions
                            iconOne="sunny"
                            optionOne="App Theme"
                            optionTwo="Light"
                        />
                        <HrLine />
                        <SettingsOptions
                            iconOne="language"
                            optionOne="Language"
                            optionTwo="English"
                        />
                        <HrLine />
                        <SettingsOptions
                            iconOne="notifications-none"
                            optionOne="Notifications"
                        />
                    </View>
                </View>
            </View>
            <View>
                <Text className="text-xl">Security</Text>
                <View className="w-full items-center justify-between pt-4">
                    <View className="w-full h-auto flex-column border border-gray-400 rounded-xl px-5">
                        <SettingsOptions
                            iconOne="lock-outline"
                            optionOne="Change Password"
                        />
                        <HrLine />
                        <SettingsOptions
                            iconOne="logout"
                            optionOne="Logout"
                            functionality={() => setModalVisible(true)}
                        />
                    </View>
                </View>
            </View>
            <View>
                <Text className="text-xl">About</Text>
                <View className="w-full items-center justify-between mt-4 border border-gray-400 rounded-xl px-5">
                    <SettingsOptions
                        iconOne="info-outline"
                        optionOne="About App"
                        optionTwo="Version 1.0.0"
                    />
                </View>
            </View>
            <ModalPopup
                visible={modalVisible}
                icon="logout"
                Title="Logout ?"
                MessageOne="Are you sure you want to logout"
                MessageTwo="from your account ?"
                btnOne="Cancel"
                btnTwo="Logout"
                reject={() => setModalVisible(!modalVisible)}
                accept={handleLogout}
            />
        </SafeAreaView >
    )
}
export default Settings