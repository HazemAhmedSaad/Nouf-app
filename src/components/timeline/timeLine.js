import "./timeline.css";
const TimeLine = () => {
  return (
    <div className="time-line container">
      <h3 className="mb-5">How it work..?</h3>
      <div className="time-line-container mb-5 pb-5">
        <div className="time-line-item row ">
          <div className="time-line-icon col text-end me-4">
            <img
              src={require("../../assets/timeLine/tmli1.png")}
              alt="Mic Icon"
            />
          </div>
          <div className="time-line-column ">
            <div></div>
          </div>
          <div className="time-line-content col text-start ms-4">
            <div className="time-line-number rounded-circle">1</div>
            <h5 className="time-line-title">Press the Mic </h5>
            <p className="time-line-description">
              Simply tap the microphone button to start your voice search
              instantly{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
