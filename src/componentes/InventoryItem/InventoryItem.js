import React, {useState} from 'react'
import styles from './InventoryItem.module.css'

export const InventoryItem = ({ id, name,service, valor, fecha }) => {

    const [checked, setChecked] = useState(false)

    const checkedOnHandler = e => setChecked(e.target.checked)

    return (
            <li className={styles.listItem}>
                <span className={ checked ? styles.checked : undefined }>
                    {id}{name}{service}{valor}{fecha}
                </span> 
                {/* <input type="checkbox" onChange={ e => checkedOnHandler(e)} /> */}
            </li>            
    )
}