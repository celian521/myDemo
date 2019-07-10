import * as React from 'react'
import { Layout } from 'antd'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import * as styles from './index.scss'
import Error from '@components/Error'
import menu, { asynchronousComponents, IMenuInTree } from './menu'
import Header from './Header'
import Sider from './Sider'

function Home() {
    const menuTreeToList = (tree: IMenuInTree[]): IMenuInTree[] => {
        const list: IMenuInTree[] = []
        tree.map(item => {
            list.push(item)
            if (item.children || item.insideChildren) {
                list.push(...menuTreeToList(item.children || []), ...menuTreeToList(item.insideChildren || []))
            }
        })
        return list
    }
    const menuList: IMenuInTree[] = menuTreeToList(menu)

    return (
        <Layout>
            <Sider />
            <Layout>
                <Header />
                <Layout.Content className={styles.content}>
                    <Router>
                        <Switch>
                            {menuList.map(m => {
                                if (!m.path) {
                                    return null
                                }
                                return (
                                    <Route
                                        key={m.id}
                                        exact={m.exact}
                                        path={m.path}
                                        component={m.component ? asynchronousComponents[m.component] : null}
                                    />
                                )
                            })}
                            <Route component={Error} />
                        </Switch>
                    </Router>
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

export default Home
