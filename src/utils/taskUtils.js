// Create an empty task template
export const createEmptyTask = () => ({
  title: "",
  description: "",
  status: "To Do",
  completed: false,
});

// Filter tasks based on status and search term
export const filterTasks = (tasks, statusFilter, searchTerm) => {
  return tasks.filter((task) => {
    const matchesStatus =
      statusFilter === "all" ? true : task.status === statusFilter;
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });
};
