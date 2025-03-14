"use client";

import React, { useState } from "react";
import TimerDisplay from "@/components/timer/TimerDisplay";
import TimerControls from "@/components/timer/TimerControls";

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <TimerDisplay />
      <TimerControls isRunning={isRunning} setIsRunning={setIsRunning} />
    </div>
  );
}