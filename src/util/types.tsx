import { NavigatorScreenParams } from '@react-navigation/native'

export type User = {
    id: string
    name: string
    email: string
    phone_number: string
    role: string
    status: string
    joined_date: string
};

export type BottomTabParamList = {
    Dashboard: undefined
    Users: undefined
    Profile: undefined
    Settings: undefined
};

export type RootStackParamList = {
    SplahScreen: undefined
    Login: undefined
    Register: undefined
    Home: NavigatorScreenParams<BottomTabParamList>
    UserData: {
        user?: User
    } | undefined
    UserDetails: {
        user: User
    } | undefined
    Users: undefined
};
