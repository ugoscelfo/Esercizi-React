import { useRef } from 'react';

export function CarDetails ({ initialData }) {
  initialData = {
    model: 'Ford', 
    year: '2022', 
    color: 'Red'
  }
  
  const formRef = useRef();

  function handleInput () {
    formRef.current.reset();
  }

  return (
    <div>
      <form ref={formRef} onChange={handleInput}>
        <input defaultValue={initialData.model}  /> 
        <input defaultValue={initialData.year} />   
        <input defaultValue={initialData.color} />
      </form>    
    </div>       
  )
} 