import Voter from "./Voter";

function Comment({
    id,
    user,
    comment,
    votes,
    updateCommentVotes
}){

    const setVotes =(voteObj)=>{
        updateCommentVotes(id, voteObj);
    };

    return (
        <div className="comment">
            <div>
                {user}
            </div>
            <div>
                {comment}
            </div>
            <div>
                <Voter votes={votes} fnSetVotes={setVotes}/>
            </div>
            
        </div>
    );

}

export default Comment;