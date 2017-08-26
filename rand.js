var pickButton;
var header;
var body;
var choice;
var aList;

var students = [
  ["Kevin", false],
  ["Jonathan", false],
  ["Angel", false],
  ["Eric", false],
  ["Janette", false],
  ["Desmond", false],
  ["Ashiya", false],
  ["Monica", false],
  ["Susana", false],
  ["Deborah", false],
  ["Thomas", false],
  ["Julissa", false],
  ["Kyla", false],
  ["John", false],
  ["Shonica", false],
  ["Krystal", false]
];
var selectedStudents = []
var colors = [
  'hotpink',
  'orange',
  'fuchsia', 0,
  'lightblue', 0,
  'black'
];
var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');

  pickButton.addEventListener('click', pickOnClick );
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
  }
});

var pickOnClick = function (event) {
  var studentCount = students.length;
  choice.innerHTML = '&nbsp;'
  var rand = students[Math.floor(Math.random() * students.length)];
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      if(!rand[1])
       {
           choice.innerText = rand[0];
           rand[1] =true;
           studentCount--;
       }
      if(studentCount <= 0 )
          choice.innerText = "All Students Picked!";
      return;
    }
var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
}
