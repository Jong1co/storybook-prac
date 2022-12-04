import { ComponentStory, ComponentMeta } from "@storybook/react";
import Task from "../components/Task";

export default {
  component: Task,
  title: "Task",
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (arg) => <Task {...arg} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "I'm a king",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: "1",
    title: "I'm a Pinned",
    state: "TASK_PIINNED",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
