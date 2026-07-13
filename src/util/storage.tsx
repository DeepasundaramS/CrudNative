import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
    async setItem(key: string, value: any) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    },

    async getItem(key: string) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async removeItem(key: string) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    },

    async clear() {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log(error);
        }
    },
};
