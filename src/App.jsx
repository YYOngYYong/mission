import logo from "./logo.svg";
import styles from "./App.module.css";
import Pickkasso from "./components/Pickkasso";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Pickkasso />
      </div>
      <p>score</p>
    </>
  );
}

export default App;
