import styles from './todo-list.module.scss';

const TodoList = ({ todos, onDeleteTodo }) => {
    return (
        <ul>
            {todos.map(({ id, text, completed }) => {
                return (
                    <li key={id} >
                        <p>{text}</p>
                        <button onClick={() => onDeleteTodo(id)} className={styles.btn}>Delete</button>
                    </li>
                    
                );
            })}
        </ul>
    )
}

export default TodoList;