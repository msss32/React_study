import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    plus: (state, action) => {
      state.count = state.count + action.payload;
    },
    minus: (state) => {
      state.count--;
    },
  },
});

const rootReducer = combineReducers({
  count: countSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const countActions = countSlice.actions;
export default store;
