export default {
    rows: [
        {
            id: 1,
            style: {
                // backgroundColor: '#67C23A'
                minHeight:300
            },
            cols: [
                {
                    id: 3,
                    style: {
                        backgroundColor: '#409EFF',
                        flex:1,
                        
                    },
                    component: './components/A'
                },
                {
                    id: 4,
                    style: {
                        backgroundColor: '#E6A23C',
                        width:500
                    },
                    component: './components/B',
                }
            ]
        },
        {
            id: 2,
            style: {
                // backgroundColor: '#F56C6C'
                minHeight:300
            },
            cols:[
                {
                    id: 5,
                    style: {
                        backgroundColor: '#F56C6C',
                        width:500,
                        
                    },
                    component: './components/C'
                },
                {
                    id: 6,
                    style: {
                        backgroundColor: '#67C23A',
                        flex:1,
                    },
                    component: './components/D'
                }
            ]
        }
    ]
}