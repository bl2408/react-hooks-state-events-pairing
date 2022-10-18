
import Comment from "./Comment";

function CommentsSection({
    commentsList,
    updateCommentVotes
}){
    
    const displayComments = commentsList.map(comment=>{
        return <Comment 
                    key={comment.id}
                    id={comment.id}
                    user={comment.user} 
                    comment={comment.comment}
                    votes={comment.votes}
                    updateCommentVotes={updateCommentVotes}
                />
    });

    return (
        <>
            <h1>{commentsList.length} Comment(s)</h1>
            {displayComments}
        </>
    );

}

export default CommentsSection;