import { combineReducers } from 'redux'
import assetsReducer from '../features/assets/assetsSlice'
import selectedRowKeysReducer from '../features/selectedRowKeys/selectedRowKeysSlice'

const rootReducer = combineReducers({
    assets: assetsReducer,
    selectedRowKeys: selectedRowKeysReducer
})

export default rootReducer