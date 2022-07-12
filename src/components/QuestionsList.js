import Question from "./Question";
const QuestionsList = ({questions, handleDeleteQuestion,handleChangeQuestion})=>{
    return(
        <div className="questions-list">
            {
                questions.map((question,index) =>(
                  
                    <Question 
                    key={question.id}
                    number = {index + 1}
                    id = {question.id}
                    question = {question.question}
                    handleDeleteQuestion = {handleDeleteQuestion}
                    handleChangeQuestion = {handleChangeQuestion}
                    />
                ))
            }
        
        </div>
        

    );
};

export default QuestionsList;