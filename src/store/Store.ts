import { configureStore } from '@reduxjs/toolkit';
import { formSliceReducer } from './FormSlice';
import { useDispatch, type TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		formSlice: formSliceReducer,
	},
});

export type StoreStateType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<StoreDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<StoreStateType> = useSelector;
