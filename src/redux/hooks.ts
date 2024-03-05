import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {MyStoreDispatch, MyStore} from './store'

export const useStoreDispatch: () => MyStoreDispatch = useDispatch
export const useStoreSelector: TypedUseSelectorHook<MyStore> = useSelector
