import './Welcome.css'

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h2>Smart Travel Companion Dashboard</h2>
      </div>
      
      <div className="video-bento-grid">
        <div className="video-large">
          <video 
            autoPlay 
            muted 
            loop 
            className="destination-video"
            src="/video/dest1.mp4"
          />
          <div className="video-overlay">
            <p>Explore breathtaking landscapes</p>
          </div>
        </div>
        
        <div className="video-small-container">
          <div className="video-small">
            <video 
              autoPlay 
              muted 
              loop 
              className="destination-video"
              src="/video/dest2.mp4"
            />
            <div className="video-overlay">
              <p>Urban adventures await</p>
            </div>
          </div>
          
          <div className="video-small">
            <video 
              autoPlay 
              muted 
              loop 
              className="destination-video"
              src="/video/dest3.mp4"
            />
            <div className="video-overlay">
              <p>Tropical paradise found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
