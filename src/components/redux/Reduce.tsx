import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetDataProduct = createAsyncThunk("getdata", async (data: any) => {
    console.log(data);
    return data;
});