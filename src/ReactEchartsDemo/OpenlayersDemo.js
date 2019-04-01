import React, { Component } from 'react';

import 'ol/ol.css';
import { Map, View } from 'ol';
import Tile from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

class OpenlayersDemo extends Component {
    componentDidMount() {
        var openStreetMapLayer = new Tile({
            source: new XYZ({
                url: 'http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        window.map = new Map({
            layers: [
                openStreetMapLayer
            ],
            view: new View({
                // 设置成都为地图中心
                center: [104.06, 30.67],
                projection: 'EPSG:4326',
                zoom: 11
            }),
            target: 'map'
        });
    }
    render() {
        return (
            <div id='map'></div>
        )
    }
}


export default OpenlayersDemo;