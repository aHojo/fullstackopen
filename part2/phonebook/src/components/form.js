const Form = ({name, number, hChange, hSubmit }) => {

    return (
        <form onSubmit={hSubmit}>
            <div>
                name: <input name="name" value={name} onChange={hChange} />
                <br />
                number: <input name="number" value={number} onChange={hChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form;