function VideoDisplay ({
    src, 
    title,
    views,
    createdAt,
}){

    return(
        <>
        <iframe
            width="919"
            height="525"
            src={src}
            frameBorder="0"
            allowFullScreen
            title={title}
        />
        <h1>{title}</h1>
        <p>{views} views | Uploaded {createdAt}</p>
        </>
    );

}

export default VideoDisplay;