import { useEffect, useState } from "react";

let CurrentTime = () => {

  const [time, setTime] = useState(new Date());
  console.log("Time has been updated");

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
  

  return () => {
    clearInterval(intervalId);
    console.log("Cancelled the interval");
    };
    }, []);

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} - {""}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;