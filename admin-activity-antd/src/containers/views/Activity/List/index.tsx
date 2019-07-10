import * as React from 'react'
import { observer } from 'mobx-react'
import { Menu, Button, Row, Col, Input, Form, Select, DatePicker } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import * as styles from './index.scss'
import AutoSizer from '@components/AutoSizer'
import useRootStore from '@store/useRootStore'
import Table from './Table'

interface IProps extends FormComponentProps {
    onCancel: () => void
}

function ActivityList({ onCancel, form }: IProps) {
    const { routerStore } = useRootStore()

    function handleSearch(e: React.FormEvent<any>) {
        e.preventDefault()
    }

    function handleReset() {
        form.resetFields()
    }

    return (
        <div className={styles.container}>
            <div className={styles.operates}>
                <Menu className={styles.menuItem} selectedKeys={['list']} mode="horizontal">
                    <Menu.Item key="list">活动列表</Menu.Item>
                </Menu>
                <div className={styles.btnItem}>
                    <Button type="primary" ghost onClick={() => routerStore.history.push('/activity/edit/create')}>
                        创建活动
                    </Button>
                </div>
            </div>
            <Form className={styles.searchForm} onSubmit={handleSearch}>
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label={`活动名称`}>
                            <Input placeholder="请输入活动标题或ID" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label={`活动状态`}>
                            <Select defaultValue="all">
                                <Select.Option value="all">全部</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label={`产品类型`}>
                            <Select defaultValue="all">
                                <Select.Option value="all">全部</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label={`端口类型`}>
                            <Select defaultValue="all">
                                <Select.Option value="all">全部</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label={`活动类型`}>
                            <Select defaultValue="all">
                                <Select.Option value="all">全部</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label={`活动时间`}>
                            <DatePicker />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={handleReset}>
                            清空
                        </Button>
                    </Col>
                </Row>
            </Form>
            <AutoSizer className={styles.tableBox}>{({ height }) => <Table scrollY={height - 120} />}</AutoSizer>
        </div>
    )
}
export default Form.create<IProps>()(observer(ActivityList))
