import { useState } from "react";
import video from "../data/video.js";
import CommentsSection from "./CommentsSection.jsx";
import VideoDisplay from "./VideoDisplay.jsx";
import Voter from "./Voter.jsx";

import './styles.css';

function App() {

  const [votes, setVotes] = useState({
    upvotes: video.upvotes,
    downvotes: video.downvotes
  })

  const [toggleComments, setToggleComments] = useState(true);

  const addVotesToComments = video.comments.map(comment=>{
      return {
        ...comment,
        votes: {
          upvotes: 0,
          downvotes: 0
        }
      };
  });

  const [commentsList, setCommentsList ] = useState(addVotesToComments);

  const updateCommentVotes = (id, voteObj)=>{
      const comment = commentsList.find(comment=>comment.id === id);
      const newComment = {
          ...comment,
          votes:{...voteObj}
      }

      const newComments = commentsList.map(comment=> {
        return comment.id === id ? newComment : comment;
      });

      setCommentsList(comments => newComments);
  };

  return (
    <div className="App">
      <VideoDisplay 
        src={video.embedUrl} 
        title={video.title} 
        views={video.views}
        createdAt={video.createdAt}
      />
      <Voter votes={votes} fnSetVotes={setVotes}/>
      <br /><br />
      <button onClick={()=>setToggleComments(tog=>!toggleComments)}> {toggleComments ? "Hide" : "Show"} comments</button>
      <hr />
      {toggleComments ? <CommentsSection commentsList={commentsList} updateCommentVotes={updateCommentVotes} /> : null}
    </div>
  );
}

export default App;
