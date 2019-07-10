import * as React from 'react'
import { observer } from 'mobx-react'
import { Select } from 'antd'
const { Option } = Select

import * as styles from './index.scss'

export interface ITargetCrowdItem {
    title: string
    icon?: React.ReactNode | string
}
export interface ITargetCrowdProps {
    current: number
    list: ITargetCrowdItem[]
}

function TargetCrowd() {
    const children = [1, 2, 3, 4, 5].map((v, i) => {
        return <Option key={i.toString(36)}>{i}</Option>
    })

    return (
        <div className={styles.targetCrowd}>
            <div className={styles.group}>
                <div className={styles.attrLine}>
                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>

                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>

                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.attrLine}>
                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>

                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>

                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.attrLine}>
                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>

                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>

                    <div className={styles.attrItem}>
                        <Select placeholder="请选择属性" style={{ width: 120 }}>
                            {children}
                        </Select>
                        <Select mode="tags" placeholder="请选择或输入属性值" style={{ width: '100%', marginLeft: 10 }}>
                            {children}
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default observer(TargetCrowd)
