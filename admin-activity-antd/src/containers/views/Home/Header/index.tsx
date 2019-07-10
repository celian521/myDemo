import * as React from 'react'
import { observer } from 'mobx-react'
import { Layout, Icon } from 'antd'

import * as styles from './index.scss'
import useRootStore from '@store/useRootStore'

function Header() {
    const { globalStore, authStore } = useRootStore()
    return (
        <Layout.Header className={styles.header}>
            <Icon
                className={styles.trigger}
                type={globalStore.sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={globalStore.toggleSideBarCollapsed}
            />
            <div className={styles.right}>
                <Icon className={styles.rightIcon} type="logout" theme="outlined" onClick={authStore.logout} />
            </div>
        </Layout.Header>
    )
}

export default observer(Header)
