import * as React from 'react'
import { observer } from 'mobx-react'
import { Form, Input, Select, Checkbox } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import * as styles from './index.scss'

export interface IProps extends FormComponentProps {}

function BasicInfo({ form }: IProps) {
    const { getFieldDecorator } = form
    const [enableSaveCrowdName, setEnableSaveCrowdName] = React.useState(true)

    function changeEnableCrowdName(e: CheckboxChangeEvent) {
        setEnableSaveCrowdName(!e.target.checked)
    }

    return (
        <Form className={styles.basicInfoForm}>
            <Form.Item label="活动名称">
                {getFieldDecorator('name', {
                    rules: [
                        {
                            required: true,
                            message: '请输入活动名称!'
                        }
                    ]
                })(<Input />)}
            </Form.Item>
            <Form.Item label="目标人群">
                {getFieldDecorator('crowdType', {
                    rules: [
                        {
                            required: true,
                            message: '请选择目标人群!'
                        }
                    ]
                })(
                    <Select placeholder="下拉选择已有人群组">
                        <Select.Option value="created">新建目标人群</Select.Option>
                        <Select.Option value="1">人群目标1</Select.Option>
                        <Select.Option value="2">人群目标2</Select.Option>
                    </Select>
                )}
            </Form.Item>
            <Form.Item label={<Checkbox onChange={changeEnableCrowdName}>保存人群组，下次创建直接使用</Checkbox>}>
                {getFieldDecorator('crowdName')(
                    <Input placeholder="请填写人群组名称" disabled={enableSaveCrowdName} />
                )}
            </Form.Item>
        </Form>
    )
}
export default Form.create<IProps>()(observer(BasicInfo))
