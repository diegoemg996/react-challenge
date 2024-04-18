import { Todo } from "../interfaces/todo-interface";

interface Props {
    task: Todo;
    handleToggle: (id: string) => void;
    handleDelete: (id: string) => void;
}

export const TodoItem = ({ task, handleToggle, handleDelete }: Props) => {

    const {id, title, completed} = task;

    return (
        <li key={id} className="todo__item p-2 m-1">
            <input type="checkbox" className="m-r-3" checked={completed} onChange={() => handleToggle(id)} />
            <p 
                className={`p-2 ${completed && 'todo__item--done'}`}
            >{title}</p>

            <button 
                onClick={() => handleDelete(id)}
                className="btn btn-danger p-2"
            ><i className="fa-solid fa-trash"></i>
            </button>
        </li>
    );
};