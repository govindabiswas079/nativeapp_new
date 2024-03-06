import AsyncStorage from '@react-native-community/async-storage';

export class AsyncStorageManager {
    static async setToken(token) {
        try {
            await AsyncStorage.setItem('TOKEN', token);
        } catch (error) {
            console.log(error);
        }
    }
    static async getToken() {
        return await AsyncStorage.getItem('TOKEN');
    }
    static async setRecentSearh(renectSearch) {
        const lastSeach = await AsyncStorage.getItem('RECENTSEARCH');
        const parseData = JSON.parse(lastSeach)
        if (parseData) {
            const uniq = [...new Set(parseData)];
            return await AsyncStorage.setItem('RECENTSEARCH', JSON.stringify([renectSearch, ...uniq?.filter(item => item !== renectSearch)]));
        } else {
            return await AsyncStorage.setItem('RECENTSEARCH', JSON.stringify([renectSearch]));
        }
    }
    static async getRecentSearh() {
        return await AsyncStorage.getItem('RECENTSEARCH');
    }

    static removeItems() {
        AsyncStorage.removeItem('TOKEN');
        AsyncStorage.removeItem('RECENTSEARCH');
    }
}
