
import { useState } from "react";
import Comment from "./Comment";

function CommentsSection({
    commentsList,
    updateCommentVotes
}){

    const [search, setSearch ] = useState("");

    const handleOnChange =(event)=>{
        setSearch(txt=>event.target.value);
    };

    
    const displayComments = commentsList.filter(comment=>search ? comment.user.includes(search) : true).map(comment=>{
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
            <div className="searchbar">
                <input type="text" name="inputSearch" value={search} onChange={handleOnChange}/>
            </div>
            {displayComments}
        </>
    );

}

export default CommentsSection;