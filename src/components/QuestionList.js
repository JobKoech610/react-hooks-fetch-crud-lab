import React,{useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
const [questions,setQuestions] = useState([])

useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(resp => resp.json())
  .then(data=>setQuestions(data))
},[])

function deleteQuestion(id){
  fetch(`http://localhost:4000/questions/${id}`,{
    method:"DELETE",
  })
  .then(resp => resp.json())
  .then(() =>{
    const updatedQuestions = questions.filter((question) => question.id !== id)
  setQuestions(updatedQuestions)
  })
}

 
function handleUpdate(id, correctIndex){
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({correctIndex}),
})
.then((response)=> response.json())
.then((updatedQuestion) => {
  const updatedQuestions = questions.map((question) => {
    if (question.id === updatedQuestion.id) return updatedQuestion
    return question
  });
  setQuestions(updatedQuestions);
  });
}
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
       return  <QuestionItem question={question} key={question.id} deleteQuestion={deleteQuestion} answerChange={handleUpdate} />
      })}</ul>
    </section>
  );
}

export default QuestionList;