import React, { useState } from "react";


export const FormData = e => {

    const [image, setImagePath] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")



    const imageData = e => {
        setImagePath(e.target.value)
    }
    const nameData = e =>{
        setName(e.target.value)
    }
    const descriptionData = e =>{
        setDescription(e.target.value)
    }

    function formSubmit(event){
      event.preventDefault()
      console.log(image)
      console.log(name);
      console.log(description);
    }

    

return (
        <form action="" onSubmit={formSubmit}>

            <input onChange={imageData} type="text" name="image" value={image} />
            <br />
            <input onChange= {nameData} type="text" name="name" value={name} />
            <br />
            <input onChange={descriptionData} type="text" name="description" value={description} />
            <button type="submit" disabled={(!image || !name || !description) ? true : false }>Submit</button>

        </form>
     )
}