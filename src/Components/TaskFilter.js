const TaskFilter = ({ statusFilter, setStatusFilter }) => (
  <div style={{ marginBottom: "20px" }}>
    <label htmlFor="statusFilter">Filter by Status: </label>
    <select
      id="statusFilter"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      style={{ padding: "8px", width: "20%" }}
    >
      <option value="all">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  </div>
);
export default TaskFilter;
