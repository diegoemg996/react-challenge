import { useState } from "react";
import { Todo } from "../interfaces/todo-interface";
import { TodoItem } from "./TodoItem";

export const ToDo = () => {

    const [toDoList, setToDoList] = useState<Todo[]>([])
    const [newTask, setNewTask] = useState<string>('')
    
    const handleAdd = (task: string) => {
        if (!task.trim()) return;
        setToDoList(prevState => [
            ...prevState,
            {
                id: new Date().getTime().toString(),
                title: task,
                completed: false
            }
        ]);
        setNewTask('');
    };

    const handleDelete = (id: string) => {
        setToDoList(prevState => prevState.filter(todo => todo.id !== id));
    };

    const handleToggle = (id: string) => {
        setToDoList(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    };

    return (
        <div>
            <h1 className="m-t-3">To-Do</h1>
            <div className="todo__field">
                <input 
                    type="text"
                    className="text-field p-2"
                    placeholder="Add a new task"
                    value={newTask} 
                    onChange={e => setNewTask(e.target.value)}
                />
                <button
                    className="btn btn-primary p-3"
                    onClick={() => handleAdd(newTask)}
                    disabled={!newTask}
                >Add</button>
            </div>

            <h3 className="m-t-3">Pending</h3>
            <hr />
            <ul className="m-t-3">
                {
                    toDoList.length === 0 && (
                        <p className="todo__item p-3 m-1">No tasks yet</p>
                    )
                }
                {
                    toDoList.map(todo => (
                        !todo.completed && (
                            <TodoItem
                                task={todo}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                                key={todo.id}
                            />
                        )
                    ))
                }
            </ul>

            <h3 className="m-t-3">Completed</h3>
            <hr />
            <ul className="m-t-3">
                {
                    toDoList.length === 0 && (
                        <p className="todo__item p-3 m-1">No tasks completed</p>
                    )
                }
                {
                    toDoList.map(todo => (
                        todo.completed && (
                            <TodoItem
                                task={todo}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                                key={todo.id}
                            />
                        )
                    ))
                }
            </ul>
        </div>
    )

}
