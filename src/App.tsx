import React from 'react';
import { ListGroup } from "react-bootstrap";
import {TodoItem} from "./components/todo-item";

const App: React.FC = () => {

    const style = {
        title: {
            marginTop: '2rem',
            marginBottom: 0
        },
        span: {
            fontSize: '12px'
        },
    };

    const todos = [
        {id: 1, title: 'Сделать зарядку'},
        {id: 2, title: 'Купить молоко'},
        {id: 3, title: 'Сходить на спорт'},
        {id: 4, title: 'Чтение книги'},
    ];

    return (
        <div className="container">
            <h2 style={style.title}>План на день</h2>
            <p style={style.span}>воскресенье, 12 января</p>
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
