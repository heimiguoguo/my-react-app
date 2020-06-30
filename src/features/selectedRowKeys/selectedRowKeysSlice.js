import {createSlice} from '@reduxjs/toolkit'

const selectedRowKeysSlice = createSlice({
    name:'selectedRowKeys',
    initialState:[],
    reducers:{
        setSelectedRowKeys(state,action){
            return action.payload
        }
    }
})

export const {setSelectedRowKeys} = selectedRowKeysSlice.actions

export default selectedRowKeysSlice.reducer