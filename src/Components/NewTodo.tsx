import { useRef } from 'react';

const NewTodo = () => {
  const todoTexrRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Type text</label>
      <input type="text" id='text' ref={todoTexrRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
