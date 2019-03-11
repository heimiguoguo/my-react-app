export default {
    rows: [
        {
            id: 1,
            style: {
                backgroundColor: '#67C23A'
            },
            cols: [
                {
                    id: 3,
                    style: {
                        width: '30px',
                        backgroundColor: '#409EFF'
                    },
                    components: [
                        './components/A'
                    ]
                },
                {
                    id: 4,
                    style: {
                        backgroundColor: '#E6A23C',
                    },
                    components: [
                        './components/B',
                        './components/C'
                    ]
                },
                {
                    id: 5,
                    style: {
                        width: '200px',
                        backgroundColor: '#909399'
                    },
                    components: [
                        './components/D'
                    ]
                }
            ]
        },
        {
            id: 2,
            style: {
                backgroundColor: '#F56C6C'
            }
        }
    ]
}