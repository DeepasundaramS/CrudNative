import { Modal, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export type Props = {
    visible: Boolean,
    icon: string,
    Title: string,
    MessageOne: string,
    MessageTwo: string,
    accept: () => void,
    reject: () => void,
    btnOne: string,
    btnTwo: string
};

const ModalPopup = ({
    visible,
    icon,
    Title,
    MessageOne,
    MessageTwo,
    accept,
    reject,
    btnOne,
    btnTwo }: Props) => {
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={Boolean(visible)}>
                <View className="absolute w-full h-full z-30 bg-gray-500 opacity-[50%]"></View>
                <View className="absolute z-40 bottom-0 bg-white h-[40%] w-full rounded-xl">
                    <View className="items-center justify-between h-full pt-8">
                        <View className="items-center gap-4">
                            <View className="rounded-full bg-[#FFD6D6] w-24 h-24 items-center justify-center">
                                <MaterialIcons name={icon} color="#FF3737" size={35} />
                            </View>
                            <View className="flex-column items-center gap-3">
                                <Text className="text-3xl font-bold">{Title}</Text>
                                <View className="items-center">
                                    <Text className="text-xl font-semibold text-gray-500">{MessageOne}</Text>
                                    <Text className="text-xl font-semibold text-gray-500">{MessageTwo}</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row gap-4 items-center pb-8">
                            <TouchableOpacity className="border border-gray-300 p-3 rounded-xl w-[43%]" onPress={reject}>
                                <Text className="text-black text-center font-semibold text-2xl">{btnOne}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-red-600 p-3 rounded-xl w-[43%]"
                                onPress={accept} >
                                <Text className="text-white text-center font-semibold text-2xl">{btnTwo}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}
export default ModalPopup