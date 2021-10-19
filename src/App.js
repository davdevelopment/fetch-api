import { useEffect, useState } from "react";
import Rating from "./Rating";
import "./App.scss";

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json"
        )
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson);
            });
    }, []);

    return (
        <div className="App">
            <div className="App-header">
              <h1>{data.title}</h1>
              <time>{`${data.day}/${data.month}/${data.year}`}</time>
              <img src={data.img} alt={data.alt}/>
              <p>{data.alt}</p>
              <Rating />
            </div>
        </div>
    );
}

export default App;
