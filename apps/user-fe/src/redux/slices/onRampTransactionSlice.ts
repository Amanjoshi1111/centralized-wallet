import { prisma, Prisma } from "@repo/db/client";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOnRampTransaction } from "@/lib/actions/onRampTransaction";

const initialState: Prisma.OnRampTransactionGetPayload<undefined>[] = [];

export const fetchOnRampTransactions = createAsyncThunk('fetchOnRampTransactions', getOnRampTransaction)

const onRampTransactionSlice = createSlice({
    name: 'transferTransaction',
    initialState,
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<Prisma.OnRampTransactionGetPayload<undefined>[]>) => {
        builder.addCase(fetchOnRampTransactions.pending, (state, action) => {
            console.log('loading');
        })
        builder.addCase(fetchOnRampTransactions.fulfilled, (state, action) => {
            if(Array.isArray(action.payload)){
                console.log('state', action.payload);
                return action.payload;  
            }
        })
        builder.addCase(fetchOnRampTransactions.rejected, (state, action) => {
            console.log("Error ", action.error);
        })
    }
})

export default onRampTransactionSlice.reducer;
