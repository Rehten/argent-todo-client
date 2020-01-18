import React from "react";
import { ListGroup } from "react-bootstrap";
import { TodoItem } from "./components/todo-item";
import classes from "./App.module.css";

const App: React.FC = () => {
    const todos = [
        {id: 1, title: 'Сделать зарядку'},
        {id: 2, title: 'Купить молоко'},
        {id: 3, title: 'Сходить на спорт'},
        {id: 4, title: 'Чтение книги'},
    ];

    return (
        <div className="container">
            <h2 className={classes.todoTitle}>План на день</h2>
            <p className={classes.todoDate}>воскресенье, 12 января</p>
            <ListGroup variant="flush">
                {
                    todos.map(item => {
                        return (
                            <React.Fragment key={item.id}>
                                <TodoItem
                                    description={item.title}
                                    onChange={(data) => {}}
                                    onDelete={(data) => {}}
                                    onCheck={(data) => {}}
                                    onVoice={(data) => {}}
                                    isChecked={false}
                                    id={item.id}
                                />
                            </React.Fragment>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
};

export default App;
