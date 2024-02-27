// Make AJAX request to backend Lambda function
fetch('https://all2i218t8.execute-api.us-east-1.amazonaws.com/dev/hello')
  .then(response => response.json())
  .then(data => {
    // Update UI with response data
    document.getElementById('message').innerText = data.message;
  })
  .catch(error => console.error('Error fetching data:', error));
