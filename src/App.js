import { useState } from "react";
import Header from "./components/Header";
import QuestionsList from "./components/QuestionsList";
import Add from "./components/Add";
import {nanoid} from 'nanoid';

function App() {
  const [questions, setQuestions]= useState(
    [
    {
      id: nanoid(),
      question: "first question",
    },
    {
      id: nanoid(),
      question:"second question",
    },
    ]
  );

  const addQuestion= () => {
    const newQuestion = {
      id:nanoid(),
      question: "new question",
    }
    const newQuestions = [...questions,newQuestion];
    setQuestions(newQuestions);
  };

  const deleteQuestion = (id) =>{
    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions);
  };
  const changeQuestion =(id,text)=>{
    
    setQuestions((prevQuestions)=>prevQuestions.map((question)=>{
      if(question.id===id){
        console.log(question.question);
        return {...question,question:text}
      }else return question
    }));
    

  }
  return (
   <div className="container">
     <Header/>
     <QuestionsList 
        questions = {questions}
        handleDeleteQuestion = {deleteQuestion}
        handleChangeQuestion = {changeQuestion}
        />
     <Add handleAddQuestion = {addQuestion}/>
   </div>
  );
};

export default App;
