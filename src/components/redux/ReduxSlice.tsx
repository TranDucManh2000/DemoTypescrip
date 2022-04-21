import { createSlice } from "@reduxjs/toolkit";
import { getstate, initialStates } from "../interface/Interface";
import { GetDataProduct } from "./Reduce";

const initialState: initialStates = {
    datas: [
        {
            name: 'manh',
        },
    ]
};

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetDataProduct.fulfilled, (state: initialStates, action) => {
                state.datas = action.payload;
            })
    },
});

export const datasVluae = (state: getstate) => {
    // console.log(state);
    return state.store.datas;
};

const TodoReducr = TodoSlice.reducer;

export default TodoReducr;
