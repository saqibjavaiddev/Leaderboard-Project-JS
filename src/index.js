import './style.css';

const inputKey = document.getElementById('myname');
const inputValue = document.getElementById('myscore');
const btnInsert = document.getElementById('addscore');
const taskBox = document.querySelector('#data');

btnInsert.onclick = () => {
  const key = inputKey.value;
  const { value } = inputValue;

  if (key && value) {
    localStorage.setItem(key, value);
  }
};
let li = '';
for (let i = 0; i < localStorage.length; i += 1) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  li += `<div id="score">
            <p>${key} :</p>
            <p> ${value}</p>
          </div>`;
}

if (localStorage.length === 0) {
  li += '<center>No Scores to Display</center>';
}
taskBox.innerHTML = li;
