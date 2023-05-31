import { useState, useEffect } from "react";
import "./App.css";
import svgNextBtn from "./images/icon-next.svg";
import svgPrevBtn from "./images/icon-prev.svg";
import svgBg from "./images/pattern-bg.svg";
import imgTanya from "./images/image-tanya.jpg";
import imgJohn from "./images/image-john.jpg";

function App() {
  const slides = [
    {
      quote: `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend  this course enough. I'm now in the job of my dreams and so excited about the future."`,
      author: "Tanya Sinclair",
      position: "UX Engineer",
      image: imgTanya,
    },
    {
      quote: `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`,
      author: "John Tarkpor",
      position: "Junior Front-end Developer",
      image: imgJohn,
    },
  ];
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        setIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (event.key === "ArrowRight") {
        setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
      }
      console.log(event.key);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <div className="text-panel">
        <div className="quote">{slides[index].quote}</div>
        <div className="author">
          {slides[index].author}&nbsp;&nbsp;
          <span className="position">{slides[index].position}</span>
        </div>
      </div>
      <div className="img-panel">
        <img className="profile-img" src={slides[index].image} alt="profile" />
        <img className="bg-img" src={svgBg} alt="background" />
        <div className="btn">
          <button
            className="prev-btn"
            onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            <img src={svgPrevBtn} alt="prev-btn" />
          </button>
          <button
            className="next-btn"
            onClick={() =>
              setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
            }
          >
            <img src={svgNextBtn} alt="next-btn" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
