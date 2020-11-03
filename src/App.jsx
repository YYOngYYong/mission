import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Pickkasso from "./components/Pickkasso";

function App() {
  const [color, setColor] = useState("");
  const [otherColor, setOtherColor] = useState("");
  const [score, setScore] = useState(0);
  const [boxes, setBoxs] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]);

  useEffect(() => {
    setColor(randomRgb());
    setOtherColor(differColor());
  }, []);

  return (
    <>
      <div className={styles.app}>
        <Pickkasso
          boxes={boxes}
          colors={color}
          otherColor={otherColor}
          setScore={setScore}
          score={score}
        />
      </div>
      <p>score : {score}</p>
    </>
  );
}
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const differColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue + 20})`;
};
export default App;
