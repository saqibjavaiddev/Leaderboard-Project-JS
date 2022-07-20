const apiBaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = '7k8y5tT0sa1oRBs8pgac';
const createGame = async (name) => {
    const response = await fetch(apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(`{name: ${name}}`),
    });
  
    const res = await response.json();
    return res;
  };
  
  const createUserData = async (data) => {
    const response = await fetch(`${apiBaseUrl}${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const res = await response.json();
    return res;
  };
  
  const getUsersData = async () => {
    const response = await fetch(`${apiBaseUrl}${gameId}/scores/`);
  
    const usersData = await response.json();
    return usersData;
  };
  
  export { createGame, createUserData, getUsersData }; 