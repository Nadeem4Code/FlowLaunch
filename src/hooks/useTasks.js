import { useState, useEffect } from "react";
import { fetchTasks } from "../services/api";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return { tasks, setTasks, loading, loadTasks };
};

export default useTasks;
