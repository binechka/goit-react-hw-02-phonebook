import React from "react"
import s from "./Filter.module.css"
const Filter = ({value, onChange}) => {
    return<div className={s.holder}> <p className={s.title}>Find contacts by name</p>
        <input className={s.input} type="text" value={value} onChange={onChange} /></div>
}
 
export default Filter