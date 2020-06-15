import { connect } from 'react-redux'
import AssetChart from '../components/AssetChar'

const mapStateToProps = state => {
    return {
        assets: state.assets
    }
}

const AssetChartContainer = connect(
    mapStateToProps
)(AssetChart)

export default AssetChartContainer