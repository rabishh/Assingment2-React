import React from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  render() {
    this.state = [
      {
        heading: "What is Angular?",
        content:
          "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS",
        button: "CLICK ME",
      },
      {
        heading: "What is React?",
        content:
          "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        button: "CLICK ME",
      },
      {
        heading: "What is Vue?",
        content:
          "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members",
        button: "CLICK ME",
      },
    ];

    return (
      <div className="card">
        {this.state.map((body) => {
          return (
            <div className="card-ctn">
              <div className="header">
                <h1>{body.heading}</h1>
              </div>
              <div className="body">
                <p>{body.content}</p>
              </div>
              <div className="footer">
                <button>{body.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
