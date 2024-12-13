import React, { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";
import AddTaskForm from "./AddTaskForm";
import TaskFilter from "./TaskFilter";
import getTableColumns from "./getTableColumns";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTasks from "../hooks/useTasks";
import {
  handleAddTask,
  handleDelete,
  handleInlineEdit,
} from "../services/taskHandlers";
import { createEmptyTask, filterTasks } from "../utils/taskUtils";

const TaskTable = () => {
  const tableRef = useRef(null);
  const { tasks, setTasks, loading } = useTasks();
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [newTask, setNewTask] = useState(createEmptyTask());
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredTasks(filterTasks(tasks, statusFilter, searchTerm));
  }, [statusFilter, tasks, searchTerm]);

  useEffect(() => {
    if (loading || !tableRef.current) return;

    if (tableRef.current.tabulator) {
      tableRef.current.tabulator.destroy();
    }

    new Tabulator(tableRef.current, {
      data: filteredTasks,
      layout: "fitColumns",
      responsiveLayout: "hide",
      placeholder: "No tasks available",
      columns: getTableColumns(
        (id, field, value) =>
          handleInlineEdit(id, field, value, tasks, setTasks, setFilteredTasks),
        (taskId) =>
          handleDelete(taskId, tasks, setTasks, setFilteredTasks, tableRef)
      ),
    });
  }, [loading, filteredTasks]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        <div>
          To Do: {tasks.filter((task) => task.status === "To Do").length}
        </div>
        <div>
          In Progress:{" "}
          {tasks.filter((task) => task.status === "In Progress").length}
        </div>
        <div>
          Completed: {tasks.filter((task) => task.status === "Done").length}
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks by title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {/* Add Task Form */}
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={() =>
          handleAddTask(newTask, tasks, setTasks, setFilteredTasks)
        }
      />

      {/* Task Filter */}
      <TaskFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Task Table */}
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <div ref={tableRef} style={{ marginTop: "20px" }}></div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default TaskTable;
