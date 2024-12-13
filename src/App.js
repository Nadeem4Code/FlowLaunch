import React, { useEffect, useState } from "react";
import { fetchTasks } from "./services/api";
import TaskTable from "./Components/TaskTable";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task List Manager</h1>
      <TaskTable tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
