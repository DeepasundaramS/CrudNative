import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../components/splashScreen";
import Login from "../screens/login";
import { NavigationContainer } from "@react-navigation/native";
import BottomTapNavigation from "./bottomTapNavigations";
import UserDetails from "../screens/userDetails";
import UserData from "../screens/userData";
import Register from "../screens/register";
import { useSelector } from "react-redux";
import { RootStackParamList } from "../util/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RouterNavigation = () => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    return (
        <>
            <NavigationContainer>
                {isAuthenticated ? (
                    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Home" component={BottomTapNavigation} />
                        <Stack.Screen name="UserData" component={UserData} />
                        <Stack.Screen name="UserDetails" component={UserDetails} />
                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator initialRouteName="SplahScreen" screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="SplahScreen" component={SplashScreen} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </>
    )
}
export default RouterNavigation