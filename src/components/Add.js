const Add = ({handleAddQuestion}) =>{
    return(
        <div  className="add-button" onClick={handleAddQuestion}>
             <i class="fa-solid fa-plus fa-3x" />
        </div>
           
    );
};
export default Add;