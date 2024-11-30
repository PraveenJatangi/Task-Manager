import React,{useState} from 'react'

function Form(props) {
 
   const[nam,setNam]=useState("")

    const handleSubmitForm=(event)=>{
        event.preventDefault();
        props.onsubmit(nam);
        setNam("");
    }

    const handleChange=(event)=>{
      setNam(event.target.value);
      
    }

  return (
    <form onSubmit={handleSubmitForm}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={nam}
          onChange={handleChange}
          
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
  )
}

export default Form
