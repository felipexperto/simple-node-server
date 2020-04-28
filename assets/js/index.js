const fetchData = API_URL => 
  fetch(API_URL)
  .then(response => response.json())
  .catch(function (error) {
    console.log(error);
  });

/*
  Passo 02: Ao finalizar o carregamento deste arquivo
  atribuimos a arrow function assíncrona `async () => {}` abaixo,
  ao evento que monitora o estado de carregamento
  do documento `document.onreadystatechange` 
*/

document.onreadystatechange = async () => {
  // Passo 02.1: Se o carregamento está 'complete', execute:
  if (document.readyState === 'complete') {
    // Passo 02.2: Pega a div 'result' pelo ID para posteriormente inserir o resultado
    const resultWrapper = document.getElementById('result');
    /* 
      Passo 02.3: Aqui começa a mágica.
      Até este momento tudo ocorreu client-side no navegador do usuário. 
      Agora estamos fazendo uma chamada assíncrona para a rota criada no NodeJS.
      Vamos para o Passo 03 em `/index.js`.
    */
    //const fetchResponse = await fetchData('/api/user/get/01');
    // Passo 09: Exibindo resultado
    resultWrapper.innerHTML = JSON.stringify(fetchResponse, null, '\t');
  }
}