const getTableColumns = (handleInlineEdit, handleDelete) => {
  return [
    { title: "ID", field: "id", hozAlign: "center", width: 70 },
    {
      title: "Title",
      field: "title",
      editor: "input",
      cellEdited: (cell) =>
        handleInlineEdit(cell.getData().id, "title", cell.getValue()),
    },
    {
      title: "Description",
      field: "description",
      editor: "input",
      cellEdited: (cell) =>
        handleInlineEdit(cell.getData().id, "description", cell.getValue()),
    },
    {
      title: "Status", // Add the Status column here
      field: "status",
      editor: "select", // Use a dropdown editor
      editorParams: { values: ["To Do", "In Progress", "Done"] }, // Dropdown options
      cellEdited: (cell) =>
        handleInlineEdit(cell.getData().id, "status", cell.getValue()), // Handle inline edit
    },
   
    {
      title: "Actions",
      formatter: () => `<button class="delete-btn">Delete</button>`,
      hozAlign: "center",
      width: 100,
      cellClick: (e, cell) => handleDelete(cell.getRow().getData().id),
    },
  ];
};
export default getTableColumns;