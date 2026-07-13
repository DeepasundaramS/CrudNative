import { Text, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
    title: string;
    value: string;
    icon: string;
    color: string;
};

const CardView = ({
    title,
    value,
    icon,
    color,
}: Props) => {
    return (
        <>
            <View className="flex-row items-center justify-between border-gray-300 h-[50%] border rounded-2xl px-3 w-[47.5%]" >
                <View className="p-2 gap-2">
                    <Text className="text-gray-700 font-semibold text-lg">{title}</Text>
                    <Text className="font-bold text-3xl">{value}</Text>
                </View>
                <MaterialIcons
                    className="mt-5"
                    name={icon}
                    size={28}
                    color={color}
                />
            </View>
        </>
    )
}

export default CardView