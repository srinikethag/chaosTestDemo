document.addEventListener("DOMContentLoaded", function() {
    // Event listener for "Query" button
    document.getElementById("queryBtn").addEventListener("click", function() {
      invokeLambda();
    });
  });
  
  function invokeLambda() {
    fetch('https://all2i218t8.execute-api.us-east-1.amazonaws.com/dev/hello')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }
