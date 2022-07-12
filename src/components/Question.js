import AudioRecord from "./AudioRecord";
const Question = ({number,id,question,
    handleDeleteQuestion, handleChangeQuestion})=>{
    return (
        <div className="question-container">
            <div className="question">
                <div className="number"> {number} </div>
                <textarea placeholder="Type Question here..."
                    oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                    onChange = {(event) => {handleChangeQuestion(id,event.target.value)}}
                    >
                </textarea>
                <select> type </select>
            </div>
            <div className="answer">
                <AudioRecord/>
                <div className="delete-button">
                <i onClick={()=>{handleDeleteQuestion(id)}} class="fa-solid fa-trash fa-xl" ></i>     
                </div>
               
            </div>
        </div>
    )
};
export default Question;