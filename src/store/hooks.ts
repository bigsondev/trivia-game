import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetching = (actionCreator: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionCreator());
  }, []);
};
