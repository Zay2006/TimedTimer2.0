"use client";

import React from "react";

type TimerControlsProps = {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  resetTimer: () => void;
};

export default function TimerControls({
  isRunning,
  setIsRunning,
  resetTimer,
}: TimerControlsProps) {
  return (
    <div className="text-center mt-4 flex gap-4">
      <button
        onClick={() => setIsRunning((prev) => !prev)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        {isRunning ? "Pause" : "Start Focus Session"}
      </button>

      <button
        onClick={resetTimer}
        className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Reset
      </button>
    </div>
  );
}