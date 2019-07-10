import * as React from 'react'
import { observer } from 'mobx-react'
import { Icon } from 'antd'

import * as styles from './index.scss'
import useRootStore from '@store/useRootStore'
import ActivityStepsBar, { IActivityStepsBarItem } from './ActivityStepsBar'
import BasicInfo from './BasicInfo'
import TargetCrowd from '../TargetCrowd'

interface IStepsItem extends IActivityStepsBarItem {
    component?: React.ReactNode | string
}
const setpsItems: IStepsItem[] = [
    {
        title: '目标人群',
        icon: <Icon type="info" />
    },
    {
        title: '目标区域',
        icon: <Icon type="tool" />
    },
    {
        title: '触及界面',
        icon: <Icon type="diff" />
    },
    {
        title: '时间条件',
        icon: <Icon type="setting" />
    },
    {
        title: '触发条件',
        icon: <Icon type="schedul" />
    },
    {
        title: '媒体编辑',
        icon: <Icon type="play-square" />
    }
]

function ActivityEdit() {
    const { activityStore } = useRootStore(),
        { setpCurrent } = activityStore

    return (
        <div className={styles.container}>
            <ActivityStepsBar current={setpCurrent} list={setpsItems} />
            <BasicInfo />
            <TargetCrowd />
        </div>
    )
}
export default observer(ActivityEdit)
