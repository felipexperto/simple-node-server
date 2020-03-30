const fetchData = () => {

  const resultWrapper = document.getElementById('result');

  fetch('/api/user/get/01', {
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  })
  .then((response) => {
    console.log( response );
  })
  .catch(function(err) { 
    console.error(err);
  });
  // .then((response) => {
  //   resultWrapper.innerHTML = String(response);
  // });

}


document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    fetchData();
  }
}