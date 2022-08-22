import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Create from "./Create";
import Note from "./Note"

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("im clicked");
    setAddItem((prevData) => {
      return [...prevData, note]
    });
    console.log(note);
  };
  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currD, index) => {
        return index !== id;
      })
    );
  }
  return (
    <>
    
      <Header />
      <Create passNote={addNote} />
      {addItem.map((elm, index) => {
        return (

          <Note
            key={index}
            id={index}
            title={elm.title}
            content={elm.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>

  )

}

export default App;
