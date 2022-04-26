import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>"It's Time To Go"</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="m-w-500 mx-auto my-4 text-center">
      <div className="flex flex-row">
        <DateTimeDisplay
          isBlurred
          className={"basis-full"}
          value={days}
          type={"Days"}
          isDanger={days <= 3}
        />
      </div>
      <div className="flex flex-row">
        <DateTimeDisplay
          className={"basis-1/2"}
          value={hours}
          type={"Hours"}
          isDanger={false}
        />
        <DateTimeDisplay
          className={"basis-1/2"}
          value={minutes}
          type={"Mins"}
          isDanger={false}
        />
      </div>
      <div className="flex flex-row">
        <DateTimeDisplay
          className={"basis-full"}
          value={seconds}
          type={"Seconds"}
          isDanger={false}
        />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
