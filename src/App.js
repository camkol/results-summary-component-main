import React, { useEffect, useState } from "react";
import data from "./data.json";

function App() {
  const [average, setAverage] = useState(0);

  return (
    <div className="App">
      <div className="text-lg">
        <Result average={average} />
        <Summary setAverage={setAverage} />
      </div>

      <Attribution />
    </div>
  );
}

export default App;

function Result({ average }) {
  return (
    <div
      className="text-center bg-gradient-to-b from-indigo-600 to-indigo-800 p-10 rounded-b-4xl"
      // style={{
      //   borderBottomRightRadius: "3rem",
      //   borderBottomLeftRadius: "3rem",
      // }}
    >
      <h3 className="text-xl text-indigo-200 pb-6 font-medium">Your Result</h3>
      <div className="rounded-full p-10 bg-gradient-to-b from-indigo-800 to-indigo-600 w-40 h-40 mb-8 mx-auto">
        <h2 className="text-6xl text-indigo-50 font-bold">{average}</h2>
        <p className="text-indigo-500">of 100</p>
      </div>
      <h2 className="text-2xl text-indigo-50 mb-2 font-medium">Great</h2>
      <p className="text-indigo-300">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
function Summary({ setAverage }) {
  const reaction = data[0];
  const memory = data[1];
  const verbal = data[2];
  const visual = data[3];

  const summaries = [reaction, memory, verbal, visual];

  useEffect(() => {
    const calculateAverage = (w, x, y, z) => {
      setAverage(Math.floor((w + x + y + z) / 4));
    };

    calculateAverage(reaction.score, memory.score, verbal.score, visual.score);
  }, [reaction.score, memory.score, verbal.score, visual.score, setAverage]);

  return (
    <div className="p-9">
      <h3 className="text-xl mb-7 font-medium">Summary</h3>
      <div className="space-y-4">
        {summaries.map((sum, i) => (
          <Sense key={i} sum={sum} />
        ))}
      </div>
      <div className="text-xl text-center py-4 mt-6 bg-gray-700 text-gray-200 rounded-full hover:bg-gradient-to-b hover:from-indigo-600 hover:to-indigo-800 font-medium transition-all duration-300 ease-in-out">
        Continue
      </div>
    </div>
  );
}
function Attribution() {
  return (
    <div className="attribution">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://howzeitgoing.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cameron Howze
      </a>
      .
    </div>
  );
}

function Sense({ sum }) {
  const { category, score, icon, background, text } = sum;
  return (
    <div className={`flex justify-between p-4 rounded-xl ${background}`}>
      <div className={`flex ${text}`}>
        <img className="mr-3" src={icon} alt="" />
        <p className="">{category}</p>
      </div>

      <p className="text-gray-400">
        <span className="text-black font-medium">{score}</span> / 100
      </p>
    </div>
  );
}
