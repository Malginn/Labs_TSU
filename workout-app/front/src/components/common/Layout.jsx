import React from 'react'
import Header from './Header/Header'
import cn from 'classnames'

import styles from './Layout.module.scss'

const Layout = ({children, bgImage, backCallback, heading =''}) => { //children == content of app layout????
    return (
        <div className={cn(styles.wrapper, {
            [styles.otherPages]: !!heading //мы выбираем класс otherPgaes если есть переменная heading
        })}
         style={{ backgroundImage:`url(${bgImage})`}}
         >
            <Header backCallback={backCallback} />
            {heading && <div className={styles.heading}>{heading}</div>}
            {children && <div>{children}</div>}
        </div>
    )
}

export default Layout