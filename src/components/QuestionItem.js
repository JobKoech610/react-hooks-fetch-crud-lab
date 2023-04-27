import React from "react";


function QuestionItem({ question, onDeleteClick, onAnswerChange}) {
  console.log(question)
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDeleteClick() {
    if (window.confirm("danger zone!Are you sure you want to delete?")===true){
      onDeleteClick(id);
    } 
   
    
  }

  function handleAnswerChange(event) {
    onAnswerChange(id, Number(event.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
