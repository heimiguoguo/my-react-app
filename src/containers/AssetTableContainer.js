import { connect } from 'react-redux'
import { addAsset, updateAsset, deleteAsset, bulkDeleteAsset } from '../features/assets/assetsSlice'
import { setSelectedRowKeys} from '../features/selectedRowKeys/selectedRowKeysSlice'
import AssetTable from '../components/AssetTable'

const mapStateToProps = state => {
    return {
        assets: state.assets,
        selectedRowKeys: state.selectedRowKeys
    }
}

const mapDispatchToProps = {addAsset,updateAsset,deleteAsset,bulkDeleteAsset,setSelectedRowKeys}

const AssetChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AssetTable)

export default AssetChartContainer