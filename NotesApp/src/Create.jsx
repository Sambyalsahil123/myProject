import React, { useState } from "react"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Create = (props) => {
    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (elmEvent) => {

        const { name, value } = elmEvent.target;

        setNote((uData) => {
            return {
                ...uData,
                [name]: value,

            };
        });
        console.log(note);
    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }
    const expandIt = () => {
        setExpand(true);
    }
    const backNormal = () => {
        setExpand(false);
    }
    return (

        <>
            <div className="main_note" onDoubleClick={backNormal}>
                <form>
                    {expand ?
                        <input
                            type="text"
                            name="title"
                            value={note.title}
                            onChange={InputEvent}
                            placeholder="Title"
                            autoComplete="off"
                        /> : null}

                    <textarea
                        rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        placeholder="Write a note..."
                        onClick={expandIt}
                    >
                    </textarea>
                    {expand ?
                        <Button onClick={addEvent} className="MuiButton-root">
                            <AddIcon className="plus_sign" />
                        </Button> : null}

                </form>


            </div>

        </>
    )
}
export default Create;