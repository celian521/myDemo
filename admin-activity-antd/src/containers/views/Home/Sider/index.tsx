import * as React from 'react'
import classnames from 'classnames'
import { observer } from 'mobx-react'
import { Layout, Switch } from 'antd'
import intl from 'react-intl-universal'

import * as styles from './index.scss'
import useRootStore from '@store/useRootStore'
import SiderMenu from './Menu'
import aimei_logo from '@assets/images/aimei_logo.png'

function Sider() {
    const { sideBarCollapsed, sideBarTheme, changeSiderTheme } = useRootStore().globalStore

    const ChangeTheme = (
        <div className={classnames(styles.changeTheme, sideBarTheme === 'dark' && styles.dark)}>
            {intl.get('MENU_SWITCHTHEME')}
            <Switch
                checkedChildren="dark"
                unCheckedChildren="light"
                checked={sideBarTheme === 'dark'}
                onChange={val => changeSiderTheme(val ? 'dark' : 'light')}
            />
        </div>
    )
    return (
        <Layout.Sider
            className={styles.sider}
            trigger={null}
            theme={sideBarTheme}
            collapsible
            collapsed={sideBarCollapsed}
        >
            <div className={classnames(styles.logoBox, sideBarTheme === 'dark' && styles.dark)}>
                <img src={aimei_logo} />
            </div>
            <SiderMenu />
            {!sideBarCollapsed && ChangeTheme}
        </Layout.Sider>
    )
}

export default observer(Sider)
