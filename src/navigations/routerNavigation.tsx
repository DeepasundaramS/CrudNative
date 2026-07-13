import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../components/splashScreen";
import Login from "../screens/login";
import { NavigationContainer } from "@react-navigation/native";
import BottomTapNavigation from "./bottomTapNavigations";
import UserDetails from "../screens/userDetails";
import UserData from "../screens/userData";
import Register from "../screens/register";

const Stack = createNativeStackNavigator();

const RouterNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name='UserData' component={UserData} />
                    <Stack.Screen name='UserDetails' component={UserDetails} />
                    <Stack.Screen name="Dashboard" component={BottomTapNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
export default RouterNavigation