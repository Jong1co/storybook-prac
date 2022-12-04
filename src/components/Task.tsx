import React from "react";
import { TaskElement } from "./TaskLists";
import styled from "styled-components";

type TaskProps = {
  task: TaskElement;
};

const Task = ({ task }: TaskProps) => {
  return <TaskBox>{task.title}</TaskBox>;
};

export default Task;

const TaskBox = styled.div`
  width: 200px;
  height: 100px;
  background-color: white;
`;
