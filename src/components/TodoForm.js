import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(userInput);
        setUserInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task..."
                onChange={handleChange}
                value={userInput}
                className="todo-input"
            />
            <button className="todo-button">Save</button>
        </form>
    );
};

export default TodoForm;
