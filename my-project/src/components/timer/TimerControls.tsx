"use client";

import React from "react";

type TimerControlsProps = {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TimerControls({
  isRunning,
  setIsRunning,
}: TimerControlsProps) {
  return (
    <div className="text-center mt-4">
      <button
        onClick={() => setIsRunning((prev) => !prev)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        {isRunning ? "Pause" : "Start Focus Session"}
      </button>
    </div>
  );
}
