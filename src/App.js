import React, { useState } from "react";

import Slider from "react-slick";

import Profile from "./profile";
import Movie from "./Movie/Movie";
import Team from "./team/team";
import InsertInfo from "./insertInfo/InsertInfo";
import Loading from "./component/Loading";
import Alert from "./component/alert";

import js_injection_img from "./img/원본.png";
import soma from "./img/soma.png";
import bus from "./img/bus.png";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [loading, setLoading] = useState([0, 0]); // loading,alert
  const [input, setInput] = useState({
    github: "",
    linkedin: "",
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };
  if (loading[0] === 1) {
    setTimeout(function () {
      setLoading([0, 1]);
    }, 1000);
  }
  return (
    <div className="App">
      <Profile />
      {loading[0] === 1 && <Loading />}
      {loading[1] === 1 && (
        <Alert
          showAlert={loading}
          setShowAlert={setLoading}
          github={input.github}
          linkedin={input.linkedin}
        />
      )}
      {loading[0] === 0 && (
        <Slider {...settings}>
          <InsertInfo
            input={input}
            setInput={setInput}
            setLoading={setLoading}
          />
          <Movie
            movies={
              input.github !== ""
                ? [
                    {
                      title: "버스하냥",
                      id: "1",
                      img: bus,
                      starRating: "5.0",
                      rating: "50000명↑",
                      year: "2019",
                      genre: "자바스크립트",
                      runtime: "React.js",
                      cast: "한양대학교 ERICA 셔틀버스 안내 서비스 '버스하냥'",
                    },
                    {
                      title: "JS-injection",
                      id: "2",
                      img: js_injection_img,
                      starRating: "4.7",
                      rating: "3000명↑",
                      year: "2019",
                      genre: "자바스크립트",
                      runtime: "React.js",
                      cast: "자바스크립트를 이용하여 개발한 크롬 확장자",
                    },
                    {
                      title: "소마번개",
                      id: "3",
                      img: soma,
                      starRating: "4.5",
                      rating: "대회 4등",
                      year: "2022",
                      genre: "Spring",
                      runtime: "React.js",
                      cast: "초간단 번개 모임 프로젝트",
                    },
                  ]
                : []
            }
          />
          <Team />
        </Slider>
      )}
    </div>
  );
}

export default App;
