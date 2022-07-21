import './style.css';
import { createGame, getUsersData, createUserData } from './leaderboard.js';

const refreshButton = document.getElementById('refreshbtn');

const loadScores = async () => {
  const scoresDisplay = document.getElementById('data');

  

  const usersData = await getUsersData();

  usersData.result.forEach((entry) => scoresDisplay.insertAdjacentHTML('beforeend', `
    <div id="score">
    <p>${entry.user}:</p><p> ${entry.score}</p></div>  
  `));
};

refreshButton.addEventListener('click', loadScores);

const userDataSubmit = document.getElementById('addscore');

userDataSubmit.addEventListener('click', async () => {
  let userName = document.getElementById('myname').value;
  let userScore = document.getElementById('myscore').value;
  if (userName !== '' && userScore !== '') {
    const data = {
      user: userName,
      score: userScore,
    };

    await createUserData(data);

    userName = '';
    userScore = '';
  }
  loadScores();
});

document.addEventListener('DOMContentLoaded', () => {
  createGame(`Game created at: ${new Date()}`);
  loadScores();
});
