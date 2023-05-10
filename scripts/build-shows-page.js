const loadShowDates = () => {
  getShowDates().then(shows => {
    shows.forEach(function (show) {
      const date = new Date(show.date);
      addShow(date.toDateString(), show.place, show.location);
    });
  });
}

// Load Show Dates on Page Load
document.addEventListener('DOMContentLoaded', () => {
  loadShowDates();
});

function addTableCell(row, label = '', value = '') {
  const cell = document.createElement('div');
  cell.classList.add('table__cell');
  row.appendChild(cell);

  const header = document.createElement('div');
  header.classList.add('table__cell-header');
  header.innerText = label;
  cell.appendChild(header);

  const content = document.createElement('div');
  content.classList.add('table__cell-content');
  content.innerText = value;
  cell.appendChild(content);

  return cell;
}

function addTableButton(row, label = '') {
  const cell = document.createElement('div');
  cell.classList.add('table__cell');
  row.appendChild(cell);

  const button = document.createElement('button');
  button.classList.add('table__cell-button');
  button.innerText = label;
  cell.appendChild(button);

  return cell;
}

function addShow(date, venue, location) {
  const table_body = document.querySelector(".shows__table .table__body");

  // create row
  const newRow = document.createElement('div');
  newRow.classList.add('table__row');
  table_body.appendChild(newRow);

  addTableCell(newRow, 'DATE', date);
  addTableCell(newRow, 'VENUE', venue);
  addTableCell(newRow, 'LOCATION', location);
  addTableButton(newRow, 'Buy Tickets');

  newRow.addEventListener('click', (event) => {
    const all_rows = table_body.querySelectorAll('.table__row');
    all_rows.forEach(row => {
      row.classList.remove('table__row--selected');
    });
    newRow.classList.add('table__row--selected');
  })
}