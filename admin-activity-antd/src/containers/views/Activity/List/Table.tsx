import * as React from 'react'
import { Table, Divider, Popconfirm, Menu, Icon, Dropdown, Button } from 'antd'
import { ClickParam as IClickParam } from 'antd/lib/menu'
import { observer } from 'mobx-react'

import { useOnMount } from '@utils/reactExt'
import { formatDate } from '@utils/index'
import useRootStore from '@store/useRootStore'

interface IProps {
    scrollY: number
}

function ActivityListTable({ scrollY }: IProps) {
    const { userStore, routerStore } = useRootStore()

    function handleMenuClick(param: IClickParam) {}

    useOnMount(userStore.getUsers)

    const btnMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="link">活动链接</Menu.Item>
            <Menu.Item key="detail">活动数据</Menu.Item>
            <Menu.Item key="offline">下 线</Menu.Item>
        </Menu>
    )
    return (
        <React.Fragment>
            <Table<IUserStore.IUser>
                className="center-table"
                style={{ width: '100%' }}
                bordered
                rowKey="_id"
                loading={userStore.getUsersloading}
                dataSource={userStore.users}
                scroll={{ y: scrollY }}
                pagination={{
                    current: userStore.pageIndex,
                    showSizeChanger: true,
                    pageSize: userStore.pageSize,
                    pageSizeOptions: ['30', '20', '10'],
                    total: userStore.total
                }}
                onChange={userStore.handleTableChange}
            >
                <Table.Column<IUserStore.IUser> key="account" title="Account" dataIndex="account" width={200} />
                <Table.Column<IUserStore.IUser> key="category" title="Category" dataIndex="category" width={100} />
                <Table.Column<IUserStore.IUser>
                    key="createdAt"
                    title="CreatedAt"
                    dataIndex="createdAt"
                    width={200}
                    render={(v, record) => formatDate(v)}
                />
                <Table.Column<IUserStore.IUser>
                    key="action"
                    title="操作"
                    width={160}
                    render={(_, record) => (
                        <span>
                            <a
                                href="javascript:;"
                                onClick={() => {
                                    routerStore.history.push(`/activity/edit/modify/${record._id}`)
                                }}
                            >
                                修改
                            </a>
                            <Divider type="vertical" />
                            <Popconfirm
                                placement="top"
                                title="确认删除?"
                                onConfirm={() => userStore.deleteUser(record._id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <a href="javascript:;">删除</a>
                            </Popconfirm>
                            <Divider type="vertical" />
                            <Dropdown overlay={btnMenu}>
                                <Button>
                                    查看 <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </span>
                    )}
                />
            </Table>
        </React.Fragment>
    )
}

export default observer(ActivityListTable)
