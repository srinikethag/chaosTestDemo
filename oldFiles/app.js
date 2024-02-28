document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('https://all2i218t8.execute-api.us-east-1.amazonaws.com/dev/hello');
      const responseData = await response.json();
  
      // Display response data on the page
      const responseContainer = document.getElementById('response-container');
      responseContainer.innerHTML = `
        <p>${responseData.message}</p>
        <pre>${JSON.stringify(responseData, null, 2)}</pre>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  