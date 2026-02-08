import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("qa");

  const projects = [
    {
      name: "Redux Counter App",
      link: "https://counter-redux-eight-kohl.vercel.app/",
    },
    {
      name: "Redux Todo App",
      // link: "https://your-todo.vercel.app",
    },
  ];

  const data = [
    {
      title: "Redux Basics",
      qa: [
        {
          q: "What is Redux?",
          a: "Redux is a predictable state management library for JavaScript applications.",
          example:
            "Like a central bank managing all money transactions in one place.",
        },
        {
          q: "What is a Store?",
          a: "The store holds the entire application state.",
          example:
            "A big container where all app data lives.",
        },
        {
          q: "What is State?",
          a: "State is the current data stored in Redux.",
          example:
            "Your bank balance — the current condition of your account.",
        },
      ],
    },

    {
      title: "Actions & Reducers",
      qa: [
        {
          q: "What is an Action?",
          a: "An action is an object describing what happened.",
          example:
            "A deposit slip telling the bank what to do.",
        },
        {
          q: "What is Action Type?",
          a: "A string identifier that tells reducers what change to make.",
        },
        {
          q: "What is a Reducer?",
          a: "A pure function that updates state based on actions.",
          example:
            "A cashier updating balance after a transaction.",
        },
      ],
    },

    {
      title: "Dispatch & Flow",
      qa: [
        {
          q: "What is Dispatch?",
          a: "Dispatch sends actions to the Redux store.",
          example:
            "Submitting your deposit request to the bank.",
        },
        {
          q: "What is Redux Flow?",
          a: "UI → Action → Reducer → Store → UI.",
          example:
            "Request → Processing → Update → Result.",
        },
      ],
    },

    {
      title: "React Redux",
      qa: [
        {
          q: "What is Provider?",
          a: "Makes Redux store accessible to React components.",
        },
        {
          q: "What is useSelector?",
          a: "Reads data from Redux store.",
          example:
            "Checking your account balance.",
        },
        {
          q: "What is useDispatch?",
          a: "Dispatches actions from components.",
        },
      ],
    },

    {
      title: "Middleware",
      qa: [
        {
          q: "What is Middleware?",
          a: "Code that runs between dispatch and reducer.",
          example:
            "Security check before entering a building.",
        },
        {
          q: "What is Redux Thunk?",
          a: "Middleware that allows async actions.",
          example:
            "Ordering food → waiting → receiving.",
        },
        {
          q: "What is Redux Saga?",
          a: "Handles complex async flows.",
        },
      ],
    },

    {
      title: "Advanced Concepts",
      qa: [
        {
          q: "What is Pure Function?",
          a: "A function that always returns the same result for same input.",
        },
        {
          q: "Why immutability matters?",
          a: "Ensures predictable updates and debugging.",
        },
        {
          q: "What is DevTools?",
          a: "Tool to inspect Redux state and actions.",
          example:
            "CCTV camera for your app data flow.",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <h1>Redux — Interview Q&A</h1>
      <p className="subtitle">learning, revision & publishing</p>

      {/* Navigation */}
      <div className="nav">
        <button onClick={() => setView("qa")}>
          Interview Q&A
        </button>

        <button onClick={() => setView("projects")}>
          Projects
        </button>
      </div>

      {/* Q&A Section */}
      {view === "qa" &&
        data.map((section, index) => (
          <div className="section" key={index}>
            <h2>{section.title}</h2>

            {section.qa.map((item, i) => (
              <div className="card" key={i}>
                <p className="question">Q. {item.q}</p>
                <p className="answer">👉 {item.a}</p>

                {item.example && (
                  <p className="example">
                    <strong>Real World Example:</strong>{" "}
                    {item.example}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}

      {/* Projects Section */}
      {view === "projects" && (
        <div className="section">
          <h2>Redux Projects</h2>

          {projects.map((p, i) => (
            <div className="card" key={i}>
              <a href={p.link} target="_blank" rel="noreferrer">
                🚀 {p.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
