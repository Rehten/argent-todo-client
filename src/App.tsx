import React from 'react';
import { ListGroup } from "react-bootstrap";

const App: React.FC = () => {

    const style = {
        title: {
            marginTop: '2rem',
            marginBottom: 0
        },
        span: {
            fontSize: '12px'
        },
        listGroupItem: {
            paddingLeft: 0,
            paddingRight: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
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
                            <ListGroup.Item style={style.listGroupItem} key={item.id}>
                                <div style={style.listGroupItem}>
                                    <input type="checkbox" />
                                    <div style={{marginLeft: "1rem"}}>{item.title}</div>
                                </div>
                                <div>
                                    <span style={{marginRight: "1.7rem", color: "#707070"}}>
                                        <i className="far fa-star"></i>
                                    </span>
                                                <span style={{marginRight: "1.7rem", color: "#707070"}}>
                                        <i className="far fa-edit"></i>
                                    </span>
                                                <span style={{marginRight: "1.7rem", color: "#707070"}}>
                                        <i className="far fa-trash-alt"></i>
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
