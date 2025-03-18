import { useState } from "react";

const VideoPreview = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail inside .scene */}
      <div className="img-wrap nth-9" onClick={() => setIsOpen(true)}>
        <img 
          src="/work/demo.png" 
          alt="thumbnail" 
          className="thumbnail"
        />
      </div>

      {/* Modal outside .scene */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <video controls className="modal-video">
              <source src="/work/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <style>
        {`
          /* Styling for the small thumbnail inside .scene */
          .nth-9 {
            position: absolute;
            max-width: 200px;
            width: 30%;
            bottom: 30%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            cursor: pointer;
          }

          /* MODAL STYLING */
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .modal-content {
            position: relative;
            background: #000;
            padding: 20px;
            border-radius: 10px;
            width: 90%;
            max-width: 900px;
          }
          .close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 30px;
            color: white;
            cursor: pointer;
          }

          /* Fix small video issue */
          .modal-video {
            width: 100%;
            height: auto;
            max-height: 80vh;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
};

export default VideoPreview;
