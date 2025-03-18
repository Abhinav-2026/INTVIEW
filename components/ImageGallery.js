import { useState, useRef } from "react";

const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = 0; // Reset video to start
    }
    setIsModalOpen(false);
  };

  return (
    <div className="scene relative">
      <div className="img-wrap">
        <img src="/work/07.png" alt="centered img" />
      </div>
      <div className="img-wrap">
        <img src="/work/customize.png" alt="image-1" />
      </div>
      <div className="img-wrap">
        <img src="/work/100.png" alt="image-2" />
      </div>
      <div className="img-wrap">
        <img src="/hero_section/katie.png" alt="image-3" />
      </div>
      <div className="img-wrap">
        <img src="/work/flat.png" alt="image-4" />
      </div>
      <div className="img-wrap">
        <img src="/work/500.png" alt="image-5" />
      </div>
      <div className="img-wrap">
        <img src="/hero_section/leo.png" alt="image-6" />
      </div>
      <div className="img-wrap">
        <img src="/work/06.png" alt="image-7" />
      </div>
      <div className="img-wrap" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
        <img src="/work/demo.png" alt="image-8" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <video ref={videoRef} controls autoPlay>
              <source src="/work/Demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
