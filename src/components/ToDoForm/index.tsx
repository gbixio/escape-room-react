import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'


export function ToDoForm(props: any) {
    const [input, setInput] = React.useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();

        props.onSubmit({
            id: uuid(),
            text: input
        });

        setInput('');
    };

    const handleChange = (e: any) => {
        setInput(e.target.value);

    };

    return (
        <form className='toDo-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Add a to do' value={input} name='text' className='toDo-input' onChange={handleChange} />
            <button className='toDo-form'> Add something to do </button>
        </form>
    )
};

