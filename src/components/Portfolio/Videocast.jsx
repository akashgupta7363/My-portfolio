import HoverVideoPlayer from "react-hover-video-player";

function Videocast({ data, img }) {
  return (
    <HoverVideoPlayer
      videoSrc={data}
      pausedOverlay={
        <img
          src={img}
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}
export default Videocast;
