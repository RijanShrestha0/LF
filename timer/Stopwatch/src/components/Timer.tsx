import { useEffect, useState } from 'react';

type TimerProps = {
  time: number;
  isRunning: boolean;
  resetTimer: number;
};

const Timer = ({ time, isRunning, resetTimer }: TimerProps) => {
  const [seconds, setSeconds] = useState(time);

  const totalSeconds = Math.max(0, seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  const formatTime = (value: number) => String(value).padStart(2, '0');

  useEffect(() => {
    setSeconds(time);
  }, [time, resetTimer]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      {formatTime(hours)}:{formatTime(minutes)}:{formatTime(secs)}
    </div>
  );
};

export default Timer;