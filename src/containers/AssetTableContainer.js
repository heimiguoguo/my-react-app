import { connect } from 'react-redux'
import { addAsset, updateAsset, deleteAsset } from '../actions'
import AssetTable from '../components/AssetTable'

const mapStateToProps = state => {
    return {
        assets: state.assets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAsset: (asset) => {
            dispatch(addAsset(asset))
        },
        updateAsset: (asset) => {
            dispatch(updateAsset(asset))
        },
        deleteAsset: id => {
            dispatch(deleteAsset(id))
        }
    }
}

const AssetChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AssetTable)

export default AssetChartContainer