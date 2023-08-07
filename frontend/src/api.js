const backendUrl = 'http://localhost:3000'; 

export const fetchData = () => {
  return fetch(`${backendUrl}/api/data`)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};
