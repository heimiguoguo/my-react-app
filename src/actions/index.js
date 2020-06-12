export const addAsset = ({ date, expected, actual }) => {
    return {
        type: 'ADD_ASSET',
        date,
        expected,
        actual
    }
}

export const updateAsset = ({ id, date, expected, actual }) => {
    return {
        type: 'UPDATE_ASSET',
        id,
        date,
        expected,
        actual
    }
}

export const deleteAsset = id => {
    return {
        type: 'DELETE_ASSET',
        id
    }
}