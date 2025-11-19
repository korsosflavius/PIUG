import './VideoSection.css';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="video-section">
      <div className="container">
        <h2 className="section-title">Descoperă Brașovul</h2>
        <p className="section-subtitle">Admiră cele mai impresionante cadre ale orașului - arhitectura medievală, piețele istorice, stâncile Tâmpei și panoramele alpine</p>
        
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/wQ6QeVsUYeY"
              title="Brasov Romania Travel Guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
