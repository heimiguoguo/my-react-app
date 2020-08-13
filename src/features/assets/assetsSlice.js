import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    assets: [
        {
            id: 0,
            date: '2020-06-30',
            expected: 9000,
            actual: 9000
        },
        {
            id: 1,
            date: '2020-07-09',
            expected: 7000,
            actual: 7000
        },
        {
            id: 2,
            date: '2020-07-19',
            expected: 9000,
            actual: 9000
        },
        {
            id: 3,
            date: '2020-07-30',
            expected: 7000,
            actual: 7000
        }
    ]
}

let assetId = Math.max(...initialState.assets.map(item => item.id))

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        addAsset(state, action) {
            const { date, expected, actual } = action.payload
            state.push({ id: ++assetId, date, expected, actual })
        },
        updateAsset(state, action) {
            const { id, date, expected, actual } = action.payload
            const asset = state.find(item => item.id === id)
            asset.date = date
            asset.expected = expected
            asset.actual = actual
        },
        deleteAsset(state,action){
            state.filter(item=>item.id!==action.payload)
        },
        bulkDeleteAsset(state,action){
            state.filter(asset => action.payload.ids.findIndex(id => id === asset.id) === -1)
        }
    }
})


export const {addAsset, updateAsset, deleteAsset, bulkDeleteAsset} = assetsSlice.actions

export default assetsSlice.reducer