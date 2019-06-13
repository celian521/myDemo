export default [
    {
        title: '图片',
        dataIndex: 'src',
        key: 'src',
        renderFun: 'pictrue'

    }, {
        title: '时间',
        dataIndex: 'date',
        key: 'date',
        renderFun: 'formatTime'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorterFalg: true
    },

    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',

    },
    {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        renderFun: 'tags',
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        renderFun: 'action'
    }

]