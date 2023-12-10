import { useState } from 'react'
import './drag_and_drop.css' 

export const DragAndDrop = () => {

    // Estado con todas las tareas
    const [tasks,setTasks] = useState([
        { 
            id: 1,
            title: 'Tarea 1',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 2,
            title: 'Tarea 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },{ 
            id: 3,
            title: 'Tarea 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },{ 
            id: 4,
            title: 'Tarea 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },{ 
            id: 5,
            title: 'Tarea 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        }
        ,
        { 
            id: 6,
            title: 'Tarea 3',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 7,
            title: 'Tarea 4',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 8,
            title: 'Tarea 5',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
    ]);

    // Filtra los elementos
    const getList = (list) =>{
        return tasks.filter(item => item.list === list)
    }

    // Obtiene la Data del elemento arrastrado
    const startDrag = (evt, item) =>{
        evt.dataTransfer.setData('itemID',item.id)
        console.log(item);
    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt,list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        item.list = list

        const newState = tasks.map(task => {
            if(task.id === itemID) return item;
            return task
        })

        setTasks(newState)
    }

    return (
        // inicializamos como un fragmanento
        <>
            <h1>
                Arrastrar y Soltar &nbsp;
                <img className='icon-react' src="src/assets/react.svg" alt="" />
            </h1>
            <br />
            <div className="drag-and-drop">
                <div className="column column--1">
                    <h3>
                        Tareas Por Hacer
                    </h3>
                    {/* zona de drag and drop */}
                    <div className="dd-zone" droppable="true" 
                    onDrop={(evt=>onDrop(evt,1))}
                    onDragOver={(evt)=>draggingOver(evt)}>
                        {/* <div className="dd-element">
                            <strong className='title'>title</strong>
                            <p className="body">body</p>
                        </div> */}
                        {getList(1).map(item => (
                            <div className="dd-element" key={item.id} draggable onDragStart={(evt)=>startDrag(evt,item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className="body">{item.body}</p>
                            </div>
                        ))}

                    </div>
                </div>
                {/*  */}
                <div className="column column--2">
                    <h3>
                        Tareas En Progreso
                    </h3>
                    {/* zona de drag and drop */}
                    <div className="dd-zone" droppable="true" 
                    onDrop={(evt=>onDrop(evt,2))}
                    onDragOver={(evt)=>draggingOver(evt)}>
                        {/* <div className="dd-element">
                            <strong className='title'>title</strong>
                            <p className="body">body</p>
                        </div> */}
                        {getList(2).map(item => (
                            <div className="dd-element" key={item.id} draggable onDragStart={(evt)=>startDrag(evt,item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className="body">{item.body}</p>
                            </div>
                        ))}

                    </div>
                </div>
                {/*  */}
                <div className="column column--3">
                    <h3>
                        Tareas Finalizadas
                    </h3>
                    {/* zona de drag and drop */}
                    <div className="dd-zone" droppable="true" 
                    onDrop={(evt=>onDrop(evt,3))}
                    onDragOver={(evt)=>draggingOver(evt)}>
                        {/* <div className="dd-element">
                            <strong className='title'>title</strong>
                            <p className="body">body</p>
                        </div> */}
                        {getList(3).map(item => (
                            <div className="dd-element" key={item.id} draggable onDragStart={(evt)=>startDrag(evt,item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className="body">{item.body}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
