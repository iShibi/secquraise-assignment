import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FormSliceStateType {
	name: string;
	dob: string;
	avatar?: string;
	gender?: string;
}

const initialState: FormSliceStateType = {
	name: '',
	dob: '',
};

export const formSlice = createSlice({
	name: 'formSlice',
	initialState,
	reducers: {
		changeName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		changeDob: (state, action: PayloadAction<string>) => {
			state.dob = action.payload == '' ? action.payload : new Date(action.payload).toISOString();
		},
		changeGender: (state, action: PayloadAction<string>) => {
			state.gender = action.payload;
		},
		changeAvatar: (state, action: PayloadAction<string>) => {
			state.avatar = action.payload;
		},
	},
});

export const { changeName, changeDob, changeGender, changeAvatar } = formSlice.actions;
export const formSliceReducer = formSlice.reducer;
