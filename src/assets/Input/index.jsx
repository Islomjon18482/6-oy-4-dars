import React from 'react'
import styles from "./index.module.css"

export default function Input(props) {
  return (
    <>
      <label className={styles.label}>
        <p>{props.label} <span>*</span></p>
        <input type="text" name="" id="" placeholder={props.pls}/>
      </label>
    </>
  )
}
