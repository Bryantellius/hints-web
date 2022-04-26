import CountdownTimer from "./components/CountDown";
import Layout from "./components/Layout";
import Board from "./components/Board";

const App = () => {
  return (
    <Layout>
      <CountdownTimer targetDate={"2022-09-05"} />
      <hr className="m-w-500 mx-auto my-4" />
      <Board value={"September 5th, 2022"} />
    </Layout>
  );
};

export default App;
