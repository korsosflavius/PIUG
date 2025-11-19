import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 1; // Start at 1 second
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 1) {
        video.currentTime = 1; // Loop back to 1 second before end
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline>
        <source src="https://www.pexels.com/download/video/14864130/" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-title">Descoperă Brașov</h2>
          <p className="hero-subtitle">
            Un oraș plin de istorie, cultură și peisaje montane spectaculoase
          </p>
          <button className="hero-button" onClick={() => {
            document.getElementById('carousel')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explorează Acum
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
