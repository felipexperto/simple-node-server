const fetchData = API_URL => 
  fetch(API_URL)
  .then(response => response.json())
  .catch(function (error) {
    console.log(error);
  });

document.onreadystatechange = async () => {
  if (document.readyState === 'complete') {
    const resultWrapper = document.getElementById('result');
    const fetchResponse = await fetchData('/api/user/get/01');
    resultWrapper.innerHTML = JSON.stringify(fetchResponse, null, '\t');
  }
}