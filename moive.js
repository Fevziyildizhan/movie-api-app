const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG = "https://image.tmdb.org/t/p/w1280"
const SEARCH = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="


const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

moives(apiUrl)
 async function moives(url){
     const resp = await fetch(url)
     const respData = await resp.json()

               console.log(respData)
                   /*
                  respData.results.forEach(moive=>{
                   
                    const {poster_path,title,vote_average,overview} = moive
                  const movieEl = document.createElement('div')
                  movieEl.classList.add('movie')

                  movieEl.innerHTML = 
                  `
                   <img src= "${IMG +poster_path}" alt= "${title}">

                   <div class = "movie-info">
                   <h3>${title}</h3>
                   <span class = "${getClassRate(vote_average)}">${vote_average}</span>
                   </div>
                   <div class = "overview">
                     <h3>overview:</h3>
                         ${overview}
                   </div>
                  ` 
                  main.appendChild(movieEl)
               });
   // return respData
*/
   ShowMoives(respData.results)
   
 }
 

 function ShowMoives(moives){

 main.innerHTML = "";

           moives.forEach(moive=>{
                   
                    const {poster_path,title,vote_average,overview} = moive
                  const movieEl = document.createElement('div')
                  movieEl.classList.add('movie')

                  movieEl.innerHTML = 

                  `
                   <img src= "${IMG +poster_path}" alt= "${title}">

                   <div class = "movie-info">
                   <h3>${title}</h3>
                   <span class = "${getClassRate(vote_average)}">${vote_average}</span>
                   </div>
                   <div class = "overview">
                    <h3>overview:</h3>
                        ${overview}
                   </div>
                  ` 
                  main.appendChild(movieEl)
               })
 }



 function getClassRate(vote){
     if(vote >=8){
         return "green";
     }else if(vote >=5){
         return "orange";
     }else {
         return "red";
     }
 }

 form.addEventListener('submit' ,(e)=>{
    e.preventDefault()

    const searchI = search.value 

    if(searchI){
        moives(SEARCH + searchI)
    }
 
 })
 
