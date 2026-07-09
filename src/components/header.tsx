import { Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ iconOne = '', title = '', iconTwo = '' }: any) => {
    const navigation = useNavigation()
    const onBack = () => {
        if (iconOne === 'arrow-back') {
            navigation.goBack()
        }
    }
    return (
        <>
            <View className="items-center flex-row justify-between pt-3">
                <TouchableOpacity
                    onPress={onBack}>
                    <MaterialIcons
                        name={iconOne}
                        size={32}
                        color="#111"
                    />
                </TouchableOpacity>
                <Text className="text-2xl font-bold w-80">
                    {title}
                </Text>
                <TouchableOpacity>
                    <MaterialIcons
                        name={iconTwo}
                        size={32}
                        color="#111"
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}
export default Header