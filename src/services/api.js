import axios from "axios";

export const fetchTasks = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data.slice(0, 20).map((task) => ({
    id: task.id,
    title: task.title,
    description: "N/A", // Placeholder, as API lacks descriptions
    status: task.completed ? "Done" : "To Do",
  }));
};
