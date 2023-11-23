function newLine() {
    var table = document.getElementById("taskTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
  
    var timeCell = newRow.insertCell(0);
    var taskCell = newRow.insertCell(1);
    var placeCell = newRow.insertCell(2);
    var priorityCell = newRow.insertCell(3);
    var checkboxCell = newRow.insertCell(4);
  
    timeCell.innerHTML = '<input type="text" placeholder="Введите время">';
    taskCell.innerHTML = '<input type="text" placeholder="Введите задачу">';
    placeCell.innerHTML = '<input type="text" placeholder="Введите место">';
    priorityCell.innerHTML = '<input type="text" placeholder="Введите важность">';
    checkboxCell.innerHTML = '<input type="checkbox">';
  }
  