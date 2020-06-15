import { combineReducers } from 'redux'

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

const assets = (state = initialState.assets, action) => {
    switch (action.type) {
        case 'ADD_ASSET':
            return [
                ...state,
                {
                    id: ++assetId,
                    date: action.date,
                    expected: action.expected,
                    actual: action.actual
                }
            ]
        case 'UPDATE_ASSET':
            return state.map(asset =>
                (asset.id === action.id)
                    ? { ...asset, date: action.date, expected: action.expected, actual: action.actual }
                    : asset
            )
        case 'DELETE_ASSET':
            return state.filter(asset => asset.id !== action.id)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    assets
})

export default rootReducer