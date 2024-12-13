import { toast } from "react-toastify";

// Handle adding a task
export const handleAddTask = (newTask, tasks, setTasks, setFilteredTasks) => {
  if (!newTask.title.trim() || !newTask.description.trim()) {
    alert("Please provide valid task details.");
    return;
  }

  const taskToAdd = { id: tasks.length + 1, ...newTask };
  setTasks((prev) => [...prev, taskToAdd]);
  setFilteredTasks((prev) => [...prev, taskToAdd]);
  toast.success("Task added successfully!");
};

// Handle deleting a task
export const handleDelete = (
  taskId,
  tasks,
  setTasks,
  setFilteredTasks,
  tableRef
) => {
  setTasks((prev) => prev.filter((task) => task.id !== taskId));
  setFilteredTasks((prev) => prev.filter((task) => task.id !== taskId));
  tableRef.current.tabulator?.deleteRow(taskId);
  toast.success("Task deleted successfully!", {
    type: "error", // Overrides the style to resemble an error
  });

};

// Handle inline editing
export const handleInlineEdit = (
  id,
  field,
  value,
  tasks,
  setTasks,
  setFilteredTasks
) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, [field]: value } : task
  );
  setTasks(updatedTasks);
  setFilteredTasks(updatedTasks);
  toast.success(`Task ${field} updated successfully!`);
};
