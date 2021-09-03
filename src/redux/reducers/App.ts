import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Users } from '../../models/user_api';

type getUserType = {
    data: Users[];
};

const initialState: getUserType = {
    data: [],
};

export const userSlice = createSlice({
	name:'users',
	initialState,
	reducers:{
		fetchUser: (state, action:PayloadAction<Users[]>) =>{
			state.data =  []
			state.data =  state.data.concat(action.payload)
		}
	}
})

export const {fetchUser} = userSlice.actions
export default userSlice.reducer
