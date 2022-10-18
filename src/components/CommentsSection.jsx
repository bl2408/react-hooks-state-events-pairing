
import Comment from "./Comment";

function CommentsSection({
    commentsList
}){
    
    const displayComments = commentsList.map(comment=><Comment key={comment.id} user={comment.user} comment={comment.comment}/>);

    return (
        <>
            <h1>{commentsList.length} Comment(s)</h1>
            {displayComments}
        </>
    );

}

export default CommentsSection;