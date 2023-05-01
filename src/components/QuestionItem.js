import React from "react";


function QuestionItem({ question, deleteQuestion, answerChange}) {
  // console.log(question)
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDeleteClick() {
    if (window.confirm("danger zone!Are you sure you want to delete?")===true){
      deleteQuestion(id);
    } 
   
    
  }

  function handleChange(e){
    answerChange(id, parseInt(e.target.value))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
