console.log("app is active");

const students = [
  { name: "alice", age: 20 },
  { name: "bob", age: 21 },
  { name: "jane", age: 20 },
];

// selection element in html where id = show
let show = document.getElementById("show");

// creates a <table> element and a <tbody> element
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");

// creating all cells
for (let i = 0; i < students.length; i++) {
  // creates a table row
  let row = document.createElement("tr");

  let cell = document.createElement("td");
  let cellText = document.createTextNode(
    students[i].name + " | " + students[i].age
  );
  cell.appendChild(cellText);
  row.appendChild(cell);

  // add the row to the end of the table body
  tblBody.appendChild(row);
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into div where id = show
show.appendChild(tbl);
// sets the border attribute of tbl to 2;
tbl.setAttribute("border", "2");

buttonAvg.addEventListener("click", () => {
  const total = students.reduce((acc, students) => acc + students.age, 0);
  let pAvg = document.getElementById("pAvg");
  let averageAgeStudents = total / students.length;
  pAvg.innerHTML = "Average Age All Student : " + averageAgeStudents;
});
