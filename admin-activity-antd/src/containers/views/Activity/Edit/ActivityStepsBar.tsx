import * as React from 'react'
import { observer } from 'mobx-react'
import { Steps } from 'antd'

import * as styles from './index.scss'
const { Step } = Steps

export interface IActivityStepsBarItem {
    title: string
    icon?: React.ReactNode | string
}
export interface IActivityStepsBarProps {
    current: number
    list: IActivityStepsBarItem[]
}

function ActivityStepsBar({ current, list }: IActivityStepsBarProps) {
    return (
        <Steps className={styles.steps} labelPlacement="vertical" current={current}>
            {list.map(item => (
                <Step key={item.title} {...item} />
            ))}
        </Steps>
    )
}
export default observer(ActivityStepsBar)
