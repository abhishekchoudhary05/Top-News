console.log('Welcome to Top News.');
let source = 'bbc-news';
let apiKey = '469ffa41b95346f68923d6c25d7e8790';


function getNews(){
  let url = `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
  fetch(url).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data['articles']);

    let newsList = document.getElementById('newsList');
    let list = '';
    data['articles'].forEach((element, index) => {
      list += `<div class="accordion-item">
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">${element.title}</button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsList">
        <div class="accordion-body">${element.content} <a href='${element.url}' target="_blank">Click here for More Information</a> </div>
      </div>
      </div>`;      
    });
    newsList.innerHTML = list;
  }).catch((error)=>{
    console.log('Error occured: ' + error);
  });
}

getNews();