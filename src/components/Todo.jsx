import { useEffect, useRef, useState } from 'react'
import UsePrevious from './shared/UsePrevious'

export default function Todo(props) {

    // Edit state tracker
    const [isEditing, setEditing] = useState(false)

    // Edition tracker
    const [newName, setNewName] = useState('')

    // Edit focus ref
    const editFieldRef = useRef(null)
    const editButtonRef = useRef(null)

    // Previous state tracker to keep the focus when editing
    const wasEditing = UsePrevious(isEditing)

    // Event listener to change in editing form
    const handleChange = (e) => {
        setNewName(e.target.value)
    }

    // Event listener to submit the edited form
    const handleSubmit = (e) => {
        e.preventDefault()
        props.editTask(props.id, newName)
        setNewName('')
        setEditing(false)
    }

    const editingTemplate = (
        <form
            className="stack-small"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input
                    id={props.id}
                    className="todo-text"
                    type="text"
                    value={newName}
                    onChange={handleChange}
                    ref={editFieldRef}
                />
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn todo-cancel"
                    onClick={() => setEditing(false)}
                >
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn"
                    onClick={() => setEditing(true)}
                    ref={editButtonRef}
                >
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    // Focus after edit
    useEffect(() => {
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus()
        } if (wasEditing && !isEditing) {
            editButtonRef.current.focus()
        }
    }, [wasEditing, isEditing])

    return (
        <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    );
}

