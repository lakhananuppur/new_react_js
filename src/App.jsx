import ClockHeading from './componens/ClockHeading';
import ClockSlogan from './componens/ClockSlogan';
import CurrentTime from './componens/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  console.log("Time has been updated");

  return (<center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>

  );
}

export default App
