import { useDispatch, useSelector, useStore } from "react-redux";

// Custom hooks to use throughout your app instead of plain `useDispatch` and `useSelector`
// These hooks can still be used, but without type inference or type safety.
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
export const useAppStore = () => useStore();
