import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import {userSlice} from '../redux/reducers/App'
const store = configureStore({
	reducer:{
		usersStore:userSlice.reducer
	}
})

//>>config type dispatch and use selector
// type of root State
type RootState = ReturnType<typeof store.getState>

//type of dispatch
type AppDispatch = typeof store.dispatch

//create type useDispatch and useSelector
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()


export default store

