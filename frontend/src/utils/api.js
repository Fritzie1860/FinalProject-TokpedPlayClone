const backendUrl = 'http://localhost:3001'; 

export const fetchData = () => {
  return fetch(`${backendUrl}/api/video/videos`)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};
