import React from 'react';
import timeConverter from "./services/time-converter";
import {Time} from "./types/entities/time";

const App: React.FC = () => {
  const time = timeConverter.straight({
    day: 3,
    month: 1,
    year: 2020
  });

  console.log(isNaN(Number(time.date)));
  // console.log('День:' + time.date.getDate());

  const reverseTime = timeConverter.reverse(time);
  //
  // console.log(reverseTime);

  const invalidDate: Time = new Time(new Date(1000000000000000000000000000000000));

  console.log(invalidDate);

  console.log(timeConverter.reverse(invalidDate));



  return null;
};

export default App;
