import React, { useState, useReducer } from 'react';

const initialState = {
  item: ''
};

const Form = () => {
  const [item, setItem] = useState([
    {
      content: 'Feed the Cat',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    }
  ]);
  
  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log('Submitted');
   dispatch( { type: "enter", payload: item } )
  }

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  return(
    <>
    <div>{state.item}</div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your ToDo" onChange={handleChange} />
        <input type="submit" value="Add" />
    </form>
    </>
  );
}

const Reducer = (state, action) => {
  switch (action.type) {
    case "enter":
      return { item: action.payload }
    case "edit":
      return { item: '' }
    case "delete":
      return { item: '' }
    default:
      throw new Error();
  }
}

export default Form;