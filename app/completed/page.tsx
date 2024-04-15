"use client";
import React from "react";
import Tasks from "../Components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";

function page() {
  const { completedTasks } = useGlobalState();
  return <Tasks title="Completed Tasked" tasks={completedTasks} />;
}

export default page;
