import {ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import style from './index.module.css';
import {ArgentInput} from "../argent-input";

interface Props {
    id: number;
    description?: string;
    isChecked: boolean;
    onCheck: (data: Props) => void;
    onChange: (data: Props) => void;
    onDelete: (data: Props) => void;
    onVoice: (data: Props) => void;
}

export const TodoItem = (data: Props) => {
    const {description, isChecked, onDelete, onChange, onCheck, onVoice}: Props = data;
    const [isEditable, setEditable] = useState(false);

    const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
        const changedData: Props = {
            description: (e.target as HTMLInputElement).value,
            ...data
        };
        onChange(changedData);
    };
    const handleCheck = (): void => {
        const changedData: Props = {
            isChecked: !isChecked,
            ...data
        };
        onCheck(changedData);
    };

    return (<ListGroup.Item className={style.listGroupItem}>
        <div className={style.listGroupItem}>
            <input type="checkbox" checked={isChecked} onChange={handleCheck}/>
            {isEditable ?
                <div className={style.description}>
                    <ArgentInput value={description}  onChange={handleChange} />
                </div>
                :
                <div className={style.description}>{description}</div>
            }
        </div>
        <div>
            <span onClick={() => onVoice(data)} className={style.icon}>
                <i className="far fa-star" />
            </span>
            <span onClick={() => setEditable(!isEditable)} className={style.icon}>
                <i className="far fa-edit" />
            </span>
            <span onClick={() => onDelete(data)} className={style.icon}>
                <i className="far fa-trash-alt" />
            </span>
        </div>
    </ListGroup.Item>);
};
