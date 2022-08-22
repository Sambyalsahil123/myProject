import React, { useState } from 'react'
import img from '../src/images/notes.png'
import DeleteIcon from '@mui/icons-material/Delete';
import "./index.css";
const ToDoList = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [EditItem, setEditItem] = useState(null)




    const addItem = () => {
        if (!inputData) {
            alert('Plzz fill the data')
        } else if (inputData && !toggleSubmit) {
            setItems(

                items.map((elm) => {
                    if (elm.id === EditItem) {
                        return { ...elm, name: inputData }
                    }
                    return elm;
                })

            )
            setToggleSubmit(false)
            setInputData("")
            setEditItem(null)
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData])

            setInputData('')
        }
    }
    const deleteItem = (index) => {
        const updatedItems = items.filter((elm) => {
            return index !== elm.id;
        })
        setItems(updatedItems)
    }

    const removeAll = () => {
        setItems([])
    }
    const editItem = (id) => {
        let newEditItems = items.find((elm) => {
            return elm.id === id
        })
        // console.log(newEditItems);
        setToggleSubmit(false)
        setInputData(newEditItems.name)
        setEditItem(id)
    }
    return (
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src={img} alt="todologo" />
                </figure>
                <div className='addItems'>
                    <input onChange={(e) => {
                        setInputData(e.target.value)
                    }} type="text" value={inputData} placeholder='✍️Add Items...' />
                    {toggleSubmit ? <i className='fa fa-plus add-btn' title='Add Item' onClick={addItem}></i> : <i className='fa fa-edit add-btn' title='Update Item' onClick={addItem}></i>}

                </div>

                <div className="showItems">
                    {

                        items.map((elm) => {
                            return (<div className="eachItem" key={elm.id}>
                                <h3>{elm.name}</h3>
                                <div className="todo-btn">
                                    <i className='fa fa-edit add-btn' title='Edit Item' onClick={() => editItem(elm.id)}></i>
                                    <DeleteIcon onClick={() => {
                                        deleteItem(elm.id)
                                    }} />
                                </div>
                            </div>
                            )

                        })
                    }
                </div>

                <div className="showItems">
                    <button className='btn effect04'
                        data-sn-link-text="Remove All" onClick={removeAll}>
                        <span>Check List</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToDoList
