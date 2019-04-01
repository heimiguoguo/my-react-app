export default {
    rows:[
        {
            id:1,
            style:{
                // height:500,
            },
            cols:[
                {
                    id:2,
                    style:{
                        width:300,
                    },
                    rows:[
                        {
                            id:4,
                            cols:[
                                {
                                    id:6,
                                    style: {
                                        height:300,
                                        flex:1,
                                        backgroundColor: '#67C23A'
                                    },
                                    component:'./components/A'
                                }
                            ]
                        },
                        {
                            id:5,
                            cols:[
                                {
                                    id:7,
                                    style: {
                                        height:200,
                                        flex:1,
                                        backgroundColor: '#409EFF'
                                    },
                                    component:'./components/B'
                                }
                            ]
                        }
                    ]
                },
                {
                    id:3,
                    style:{
                        flex:1
                    },
                    rows:[
                        {
                            id:8,
                            cols:[
                                {
                                    id:10,
                                    style: {
                                        height:200,
                                        flex:1,
                                        // backgroundColor: '#E6A23C',
                                    },
                                    // component:'./components/C',
                                    rows:[
                                        {
                                            id:11,
                                            style:{
                                                flex:1
                                            },
                                            cols:[
                                                {
                                                    id:12,
                                                    style: {
                                                        width:200,
                                                        backgroundColor: '#67C23A',
                                                    },
                                                    component:'./components/C'
                                                },
                                                {
                                                    id:13,
                                                    style: {
                                                        flex:1,
                                                        backgroundColor: '#409EFF',
                                                    },
                                                    component:'./components/E'
                                                }
                                            ]

                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id:9,
                            cols:[
                                {
                                    id:11,
                                    style: {
                                        height:300,
                                        flex:1,
                                        backgroundColor: '#F56C6C'
                                    },
                                    component:'./components/D'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}