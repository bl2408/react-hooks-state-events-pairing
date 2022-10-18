function Comment({
    user,
    comment
}){

    return (
        <>
            <h2>{user}</h2>
            <p>{comment}</p>
        </>
    );

}

export default Comment;