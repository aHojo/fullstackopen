import React from "react"

const Filter = ({filter, handleFilter}) => {
    return (
    <React.Fragment>
        <h3>Filter by name</h3>
        <input  value={filter} onChange={handleFilter} />
    </React.Fragment>
    )
}


export default Filter