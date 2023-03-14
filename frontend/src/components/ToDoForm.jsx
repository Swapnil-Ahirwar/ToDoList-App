import './ToDoForm.css';
import { useState } from 'react';

const ToDoForm = () => {

    const [text, setText] = useState("");

    const onFormSubmit = () => {

    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className='form' onSubmit={onFormSubmit}>
            <input placeholder='Enter new ToDo...' onChange={onInputChange} />
        </form>
    );
}

export default ToDoForm;