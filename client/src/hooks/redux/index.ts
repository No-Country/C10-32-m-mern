import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch } from "../../redux/store";

export const useCustomDispatch: () => Dispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
