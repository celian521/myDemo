import * as React from 'react'

import * as styles from './index.scss'

const Error = () => (
    <div className={styles.centered}>
        <div className={styles.errorContainer}>
            <div className={styles.emoji}>😭</div>
            <div className={styles.title}>404</div>
            <div>This page doesn't exist anymore.</div>
        </div>
    </div>
)

export default Error
