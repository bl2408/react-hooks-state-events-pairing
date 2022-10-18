import { useState } from "react";
import video from "../data/video.js";
import CommentsSection from "./CommentsSection.jsx";
import VideoDisplay from "./VideoDisplay.jsx";
import Voter from "./Voter.jsx";

function App() {

  const [votes, setVotes] = useState({
    upvotes: video.upvotes,
    downvotes: video.downvotes
  })

  const [toggleComments, setToggleComments] = useState(true);

  const [commentsList, setCommentsList ] = useState(video.comments)

  return (
    <div className="App">
      <VideoDisplay 
        src={video.embedUrl} 
        title={video.title} 
        views={video.views}
        createdAt={video.createdAt}
      />
      <Voter votes={votes} setVotes={setVotes}/>
      <br /><br />
      <button onClick={()=>setToggleComments(tog=>!toggleComments)}> {toggleComments ? "Hide" : "Show"} comments</button>
      <hr />
      {toggleComments ? <CommentsSection  commentsList={commentsList} /> : null}
    </div>
  );
}

export default App;
