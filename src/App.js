import './App.css';
import Profile from './profile';
import Movie from './Movie/Movie'
function App() {
  return (
    <div className="App">
      <Profile/>
      <Movie movies={[{
                      title:"JS-injection",
                      id : "qwe",
                      img:  "null",
                      starRating: "4.7",
                      rating: "Frontend",
                      year: "2019",
                      genre: "자바스크립트",
                      runtime: "React.js",
                      cast: "",
                    }]
      }/>
    </div>
  );
}

export default App;
