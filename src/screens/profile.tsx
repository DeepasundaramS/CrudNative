import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from "../components/header";
import SettingsOptions from "../components/settingsOptions";
import HrLine from "../components/hrLine";
import { useSelector } from "react-redux";

const Profile = () => {
    const admin = useSelector((state: any) => state.auth.loginUser)
    return (
        <SafeAreaView className="flex-1 gap-5 justify-between bg-white px-5">
            <Header
                iconOne="menu"
                title="Profile"
                iconTwo=""
            />
            <View className="items-center gap-8">
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
                <View className="items-center gap-4">
                    <Text className="font-bold text-3xl">{admin.name}</Text>
                    <Text className="font-semibold text-xl text-[#6B7280]">{admin.email}</Text>
                    <Text className="rounded-full bg-green-100 text-lg font-semibold text-green-600 px-3">{admin.role}</Text>
                </View>
            </View>
            <View className="w-full items-center justify-between h-[55%] pt-4 gap-2">
                <View className="w-full border border-gray-300 rounded-xl px-5">
                    <SettingsOptions
                        iconOne="person-outline"
                        optionOne="Personal Information"
                    />
                    <HrLine />
                    <SettingsOptions
                        iconOne="lock-outline"
                        optionOne="Change Password"
                    />
                    <HrLine />
                    <SettingsOptions
                        iconOne="notifications-none"
                        optionOne="Notifications"
                    />
                    <HrLine />
                    <SettingsOptions
                        iconOne="person-outline"
                        optionOne="Activity Log"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Profile