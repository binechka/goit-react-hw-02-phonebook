import React from "react"
const Filter = ({value, onChange}) => {
    return<> <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onChange} /></>
}
 
export default Filter