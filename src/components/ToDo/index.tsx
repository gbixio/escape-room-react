import React, { useState } from "react";
import {ToDoForm} from "../ToDoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

interface ToDoItem {
    id: any,
    text: any,
    index: any,
  }
  
  interface ToDoProps {
    toDos: ToDoItem [] ,
    removeToDo: (id: any) => void,
    updateToDo: (id: any, value: string) => void
  }
  
  export function ToDo({ toDos, removeToDo, updateToDo }: ToDoProps) {
{
    const [edit, SetEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value: any) => {
        updateToDo(edit.id, value);
        SetEdit({
            id: null,
            value: "",
        });
    };
if(edit.id){
    return<ToDoForm edit={edit} onSubmit={submitUpdate} />
};

    return (
        <>
        {toDos.map((toDo: { id: any; text: any }, index: any ) => (
        <div className='toDo-row' key={index}>
            <div key={toDo.id}>
                {toDo.text}
            </div>

            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeToDo(toDo.id)}
                    className='delete-icon'/>
                <TiEdit onClick={() => SetEdit({ id: toDo.id, value: toDo.text })} />
            </div>
        </div>
        ))};
        </> 
)}}
