


async function getAllNews(){
    const response = await fetch("http://localhost:4002/news/get");
    const jsonData = await response.json();
    return jsonData
}
getAllNews().then(data =>{
    let newsCardList = ``
    data.map(news =>{
        const newsCard =`
        <div class="grid-item">
            <div id="card-1" class="news-card">
                <img src="${news.image}"
                             alt="news image">
                <a href="${news.url}" target="_blank" class="title"><h6>${news.title}</h6></a>
                <p>${news.description}</p>
                <span>Published: ${news.published}</span>
                <div class="action">
                <div class="icon">    
                    <i class=" edit fa-regular fa-pen-to-square"></i>  
                </div>
                  <div class="icon">    
                    <i class="delete fa-solid fa-trash-can"></i>
                </div>
                    
                </div>
            </div>
        </div>
        `;
        newsCardList+=newsCard

    })
    document.getElementById('news-section').innerHTML = newsCardList
})