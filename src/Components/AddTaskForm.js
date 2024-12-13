const AddTaskForm = ({ newTask, setNewTask, handleAddTask }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    }}
  >
    <input
      type="text"
      placeholder="Task Title"
      value={newTask.title}
      onChange={(e) =>
        setNewTask((prev) => ({ ...prev, title: e.target.value }))
      }
      style={{ padding: "8px", width: "25%" }}
    />
    <input
      type="text"
      placeholder="Task Description"
      value={newTask.description}
      onChange={(e) =>
        setNewTask((prev) => ({ ...prev, description: e.target.value }))
      }
      style={{ padding: "8px", width: "40%" }}
    />
    <select
      value={newTask.status}
      onChange={(e) =>
        setNewTask((prev) => ({ ...prev, status: e.target.value }))
      }
      style={{ padding: "8px", width: "20%" }}
    >
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
    <button
      onClick={handleAddTask}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      Add Task
    </button>
  </div>
);
export default AddTaskForm;