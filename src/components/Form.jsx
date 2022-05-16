import { useState } from 'react'

function Form(props) {

    // Addition tracker
    const [name, setName] = useState('')

    // Event listener to track the input when adding a new task
    const handleChange = (e) => {
        setName(e.target.value)
    }

    // Event listener to track the submit when adding a new task
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(name)
        setName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

export default Form