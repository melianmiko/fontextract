import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { MyStore, MyStoreDispatch } from './store';

export const useStoreDispatch: () => MyStoreDispatch = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<MyStore> = useSelector;
