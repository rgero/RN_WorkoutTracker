import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from "./createDataContext";
import workoutAPI from '../api/workouttracker';

import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type)
    {
        case "addError":
            return { ...state, errorMessage: action.payload};
        case "storeToken":
            return { errorMessage: "", token: action.payload};
        case "clearErrorMessage":
            return {...state, errorMessage: ""}
        case "signout":
            return { token: null, errorMessage: ""}
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token)
    {
        dispatch({ type: 'signin', payload: token})
        navigate('MainFlow', {screen: "TrackFlowList"});
    } else {
        navigate('LoginFlow')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch( {type: 'clearErrorMessage' })
}

const signUp = dispatch => {
    return async ({ email, displayName, password }) => {
        try {
            const response = await workoutAPI.post('/signup', { email, displayName, password });
            
            // Storing the Token
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: "storeToken", payload: response.data.token})

            // Navigate to Main Flow
            navigate("MainFlow", {screen: "WorkoutListScreen"})
        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'addError', payload: "Something went wrong"})
        }
    };
}

const signIn = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await workoutAPI.post('/signin', { email, password });
            
            // Storing the Token
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: "storeToken", payload: response.data.token})

            // Navigate to Main Flow
            navigate("MainFlow", {screen: "WorkoutListScreen"})
        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'addError', payload: "Something went wrong"})
        }
    };
}

const signOut = dispatch => async () => {
    try {
        await AsyncStorage.removeItem('token');
        dispatch({type: "signout"})
        navigate("LoginFlow")
    } catch (err)
    {
        console.log(err);
    }
}

export const {Provider, Context } = createDataContext(authReducer, 
                                                      {clearErrorMessage, signUp, signIn, signOut, tryLocalSignin}, 
                                                      {
                                                        token: null,
                                                        errorMessage: ""
                                                      }
                                                    )