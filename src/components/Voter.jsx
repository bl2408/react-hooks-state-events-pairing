function Voter({
    votes,
    fnSetVotes = ()=>{},
}){

    function onVote(up){

        const key = up ? "upvotes" : "downvotes";

        const voteObj = {
            ...votes,

            [key]: votes[key] + 1
        }
        fnSetVotes(voteObj);
    }

    return(
        <>
        
            <button onClick={()=>onVote(true)}>{votes.upvotes} 👍</button>
            <button onClick={()=>onVote(false)}>{votes.downvotes} 👎</button>
        
        </>
    );

}

export default Voter;