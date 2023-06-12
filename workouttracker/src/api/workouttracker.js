import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://1852-2600-4040-5c5b-b500-f445-798a-8d65-6516.ngrok-free.app'
})

instance.interceptors.request.use(
    async (config)=> {
        // This is the attempt we're going to do.
        const token = await AsyncStorage.getItem("token");
        if (token)
        {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        // This is the error case if we ever fail.
        return Promise.reject(err);
    }
)

export default instance;