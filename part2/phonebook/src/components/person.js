const Person = ({name, number, id,hDelete}) => {
    return (
        <div style={{display:"flex", alignItems: "center"}}>
            <p>{name} {"=>"} {number}</p> 
            <button onClick={()=> hDelete(id)}>Delete</button>
        </div>
    )
}


export default Person;