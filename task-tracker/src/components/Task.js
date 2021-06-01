import { FaTimes } from 'react-icons/fa'
const Task = ({ task_, onDelete, onToggle }) => {
    return (
        <div className={`task ${task_.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task_.id)}>
            <h3>{task_.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                onClick={onDelete}
            /></h3>
            <p>{task_.day} </p>

        </div>
    )
}

export default Task
