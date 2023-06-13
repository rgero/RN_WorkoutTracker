import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://cf14-2600-4040-5c5b-b500-6cdb-2352-fc3e-50d1.ngrok-free.app'
})

instance.interceptors.request.use(
    async (config)=> {
        // This is the attempt we're going to do.
        const userData = await AsyncStorage.getItem("userData");
        
        if (userData)
        {
            const token = JSON.parse(userData).token;
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