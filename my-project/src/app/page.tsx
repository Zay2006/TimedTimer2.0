"use client";

import React, { useState, useEffect } from "react";
import TimerDisplay from "@/components/timer/TimerDisplay";
import TimerControls from "@/components/timer/TimerControls";

interface TimerDisplayProps {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
}

const LocalTimerDisplay: React.FC<TimerDisplayProps> = ({
  timeLeft,
  setTimeLeft,
  isRunning,
}) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (!isRunning && timeLeft !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, setTimeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>;
};

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds

  const resetTimer = () => {
    setIsRunning(false); // Stop the timer
    setTimeLeft(25 * 60); // Reset time to 25:00
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <LocalTimerDisplay
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        isRunning={isRunning}
      />
      <TimerControls
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        resetTimer={resetTimer}
      />
    </div>
  );
}
