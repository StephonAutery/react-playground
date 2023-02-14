import Chars from "../components/Chars";

function Main(props) {
  return (
    <div className="main-content">
      <p>{props.count}</p>
      <Chars />
    </div>
  );
}

export default Main;
