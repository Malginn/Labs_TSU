import React from 'react'
import styles from './Button.module.scss'

const Button = ({callback, text, type='purple'}) => {  // передаются не параметры, а объект и нужно брать перемнные в {}
    return (
        <div className={styles.wrapper}>
            <button onClick={callback} className={`${styles.button} ${styles[type]}`} >
                {text}
            </button>
        </div>
    )
}

export default Button
