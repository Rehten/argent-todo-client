import React from 'react';
import { ListGroup } from "react-bootstrap";
import { FaRegStar, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import classes from './App.module.css';

const App: React.FC = () => {
    const todos = [
        {id: 1, title: 'Сделать зарядку'},
        {id: 2, title: 'Купить молоко'},
        {id: 3, title: 'Сходить на спорт'},
        {id: 4, title: 'Чтение книги'},
    ];

    return (
        <div className="container">
            <h2 className={classes['todo-title']}>План на день</h2>
            <p className={classes['todo-date']}>воскресенье, 12 января</p>
            <ListGroup variant="flush">
                {
                    todos.map(item => {
                        return (
                            <ListGroup.Item className={classes['todo-item']} key={item.id}>
                                <div className={classes['todo-item']}>
                                    <input type="checkbox" />
                                    <div className={classes['todo-description']}>{item.title}</div>
                                </div>
                                <div>
                                    <span className={classes['todo-icon']} style={{cursor: 'pointer'}}>
                                        <FaRegStar size="1.2em" />
                                    </span>
                                    <span className={classes['todo-icon']}>
                                        <FaRegEdit size="1.1em" />
                                    </span>
                                    <span className={classes['todo-icon']}>
                                        <FaRegTrashAlt size="1.1em" />
                                    </span>
                                </div>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
};

export default App;
