import { Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
    iconOne: string;
    optionOne: string;
    optionTwo?: string;
    functionality?: () => void;
};


const SettingsOptions = ({ iconOne, optionOne, optionTwo, functionality }: Props) => {
    return (
        <>
            <TouchableOpacity
                onPress={functionality}
                className="flex-row justify-between items-center w-full py-5">
                <View className="flex-row items-center gap-5">
                    <MaterialIcons
                        name={iconOne}
                        size={30}
                        color={iconOne === 'logout' ? '#ff0000' : "#000"}
                    />
                    <Text className="text-xl font-semibold">{optionOne}</Text>
                </View>
                <View className="flex-row items-center gap-5">
                    <Text className="text-lg">{optionTwo}</Text>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        color="#000"
                        size={25}
                    />
                </View>
            </TouchableOpacity>
        </>
    )
}
export default SettingsOptions