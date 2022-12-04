import React from "react";
import Task from "./Task";

export type TaskElement = {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
};

const TaskLists = () => {
  const task: TaskElement = {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  };

  return (
    <div>
      <Task task={task} />
    </div>
  );
};

export default TaskLists;
