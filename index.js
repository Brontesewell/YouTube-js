const key = "&key=AIzaSyBBOB0l7zOAj19hkgjw5Oub4sw4r0HaEMg";
const url = "https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId="
const songChannel = ["UC0C-w0YjGpqDXGB8IHb662A","UCANLZYMidaCbLQFWXBC95Jg"]//[Ed Sheeran(5),Taylor Swift(5)]
const gamesChannel = ["UCfDT9kxAHL6M5Ssnbw02vZw","UCEe2aqK4fgDYTOjkZvTvang","UChhGJONwU_9ODfq5oy1dUaQ"] //[KCH Games TV,KingJoe83,HowAboutBeirut(Prank)]
const moviesChannel = ["UCkAGrHCLFmlK3H2kd6isipg","UC7p3ER4LwElVAtmgWFdwhgQ"] //[Mr Bean,Monsters Inc Full Movie in English - New Animation Movie]
const sportsChannel = ["UCr5vPy2YUScYtiyAYiGn2Rg","UCRijo3ddMTht_IHyNSNXpNQ"] //[Wrzzer,Dude Perfect]
let songList = [];
let gameList = [];
let movieList = [];
let sportList = [];
let allWatchLaters = [];


document.addEventListener("DOMContentLoaded", function(){
   
   songChannel.forEach(channel => { fetchSong(channel) })
    
//    songChannel.forEach(channel => { fetchSong(channel) })
//     gamesChannel.forEach(channel => { fetchGames(channel) })
//     moviesChannel.forEach(channel => {fetchMovies(channel)})
//     sportsChannel.forEach(channel => {fetchSport(channel)})

    listenForButtons();
    fetchWatchLater();
    // toogleWatchLater()
    
})

function fetchSong(channelId) 
{
    fetch(url+channelId+key) 
    .then(resp => resp.json())
    .then(data => { 
        listOfSongs(data)
        // listenToWatchLater();  //Call the watch later
 })
}

function listOfSongs(data)
{
    for (let song in data.items) 
    {   if (data.items[song].contentDetails.upload)
        {   
            let songTitle = data.items[song].snippet.title
            let songUrl = "https://www.youtube.com/watch?v="+data.items[song].contentDetails.upload.videoId
            songList.push({Title:songTitle,url:songUrl});
        }
    }
    return songList;
}

function fetchGames(channelId)
{
    fetch(url+channelId+key) 
    .then(resp => resp.json())
    .then(data => { listOfGames(data) })
}

function listOfGames(data)
{
    for (let game in data.items) 
    {   if (data.items[game].contentDetails.upload)
        {   
            let gameTitle = data.items[game].snippet.title
            let gameUrl = "https://www.youtube.com/watch?v="+data.items[game].contentDetails.upload.videoId
            gameList.push({Title:gameTitle,url:gameUrl});
        }
    }
    return gameList;
}

function fetchMovies(channelId)
{
    fetch(url+channelId+key) 
    .then(resp => resp.json())
    .then(data => { listOfMovies(data) })
}

function listOfMovies(data)
{
    for (let movie in data.items) 
    {   if (data.items[movie].contentDetails.upload)
        {   
            let movieTitle = data.items[movie].snippet.title
            let movieUrl = "https://www.youtube.com/watch?v="+data.items[movie].contentDetails.upload.videoId
            movieList.push({Title:movieTitle,url:movieUrl});
        }
    }
    return movieList;
}

function fetchSport(channelId) 
{
    fetch(url+channelId+key) 
    .then(resp => resp.json())
    .then(data => { listOfSports(data) })
}

function listOfSports(data)
{
    for (let sport in data.items) 
    {   if (data.items[sport].contentDetails.upload)
        {   
            
            let sportTitle = data.items[sport].snippet.title
            let sportUrl = "https://www.youtube.com/watch?v="+data.items[sport].contentDetails.upload.videoId
            sportList.push({Title:sportTitle, url:sportUrl});
           

        }
    }
    return sportList;
}

function listenForButtons()
{
    document.getElementById("dog-bar").addEventListener("click", handleClick)
}

function handleClick(event)
{
    
    document.getElementById("dog-info").style.display = "block"

    
        if (event.target.textContent === 'Songs')
        {
            renderHomePage(songList)
            const ulTag = document.getElementById("side-bar")
            ulTag.innerHTML = ""
           let i = 0
            for (const song in songList) 
            {
                let createLi = document.createElement("Li")
                createLi.setAttribute("class", "item-list")
                let createA = document.createElement("a")
                createA.textContent = songList[song].Title.split("(")[0]
                // createA.setAttribute("href",`${songList[song].url}`)
                createA.setAttribute('id', `${i++}`)
                createA.setAttribute('onclick','showSongInfo()')
                createA.onclick = function() {showSongInfo();};
                createLi.appendChild(createA)
                ulTag.appendChild(createLi)
            }
            
                //  ulTag.addEventListener("click", function(event) {
                
                //     const infoDiv = document.getElementById("dog-info")

                //  })
                
                
                
            }
    else if (event.target.textContent === 'Sport')
    {
        renderHomePage(sportList)
        renderElements(sportList)
    }
    else if (event.target.textContent === 'News')
    {
        console.log("you are in the news tab")
    }
    else if (event.target.textContent === 'Games')
    {
        renderHomePage(gameList)
        renderElements(gameList)
    }
    else if (event.target.textContent === 'Movies')
    {
        renderHomePage(movieList)
        renderElements(movieList)
    }
    else if (event.target.textContent === 'My Profile')
    {
        document.getElementById("dog-info").style.display = "none"
    }
}

function showSongInfo() {
    const dogContainer = document.getElementById("sidebar")
    dogContainer.addEventListener("click", function(event) {

        const info = document.getElementById("dog-info")
        
     
        const pTag = document.createElement("p")
        pTag.textContent = songList[parseInt(event.target.id)].Title
        
        info.innerHTML = ""
        // <h3 class="titleinfo">${songList[parseInt(event.target.id)].Title}</h3>
        
        const songInfo = `
        <div class="infotitle">
        <h1 class="infotitle">${songList[parseInt(event.target.id)].Title}</h1>
        </div>

        <br>
        <a href="${songList[event.target.id].url}">${songList[parseInt(event.target.id)].url}</a>
        <br>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${songList[parseInt(event.target.id)].url.split("=")[1]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <button type="button" id="watchlater" class="btn btn-dark">Watch Later</button>
        <br>
        <br>
      <div class="btn-group">
          <button class="buttons">Like +</button>
          <p id="liketext"> 0 Likes </p>
          <button class="buttons">Dislike -</button>
        </div>
        `

        info.innerHTML += songInfo
        listenToWatchLater()
        switchColors()
    })
    // listenToWatchLater()
}

function switchColors() {
   
   
      
    // Array.from(document.getElementById("side-bar").children)[0].style.color = "red"
        // const links = Array.from(document.getElementById("side-bar").children)
        // for (var i = 0 ; i < links.length ; i ++)  {
        // links.item(i).style.color = 'black' ;  
        // element.style.color='orange' ;  
        // } 
}

function renderElements(list)
{
    const ulTag = document.getElementById("side-bar")
    ulTag.innerHTML = ""
    let i = 0
    for (const item in list) 
    {
        //debugger

        let createLi = document.createElement("Li")
        let createA = document.createElement("a")
        createA.textContent = list[item].Title
        createA.setAttribute('id', `${i++}`)
        // createA.setAttribute("href",`${list[item].url}`)
        createA.setAttribute('onclick','showElementInfo(list)')
        createA.onclick = function() {showElementInfo(list);};
        createLi.appendChild(createA)
        ulTag.appendChild(createLi)
    } 
}

function showElementInfo(list) {
    const dogContainer = document.getElementById("sidebar")
    dogContainer.addEventListener("click", function(event) {
        
        const info = document.getElementById("dog-info")
        
        const pTag = document.createElement("p")
        pTag.textContent = list[event.target.id].Title
        info.innerHTML = ""
        //debugger
        // <h3 class="titleinfo">${list[parseInt(event.target.id)].Title}</h3>
        const eleInfo = `

        <div class="infotitle">
        <h1 class="infotitle">${list[parseInt(event.target.id)].Title}</h1>
        </div>
        <br>
        <a href="${list[event.target.id].url}">${list[parseInt(event.target.id)].url}</a>
        <br>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${list[event.target.id].url.split("=")[1]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <button type="button" id="watchlater" class="btn btn-dark">Watch Later</button>
        <br>
        <br>
        <div class="btn-group">
        <button class="buttons">Like +</button>
        <p id="liketext"> 0 Likes </p>
        <button class="buttons">Dislike -</button>
      </div>
        `

        info.innerHTML += eleInfo
        listenToWatchLater()
    })   
}

function renderHomePage(list) {
    const info = document.getElementById("dog-info")
    info.innerHTML = ""
//<h1 class="topchoices">Top Choices</h1>
   
    const title = `<div id="container">
    <p><a href="">Top Choices</a></p>
    </div>`
    info.innerHTML += title


    list.forEach(type => { 
    
  // debugger
  const homepage = `
    <div class="box">
    <iframe width="350" height="195" src="https://www.youtube-nocookie.com/embed/${type.url.split("=")[1]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `

    info.innerHTML += homepage
})
}

function listenToWatchLater()
{
    let button = document.querySelectorAll(".btn")[6]
        button.addEventListener("click",addToWatchlater)
}

function addToWatchlater()
{
   /*extract the url,userid and pass*/
    var url = event.target.previousElementSibling.previousElementSibling.src // (in string)
    var userId = 1;
    fetch(`http://localhost:3000/users/${userId}/watch_laters`,{
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({
            watch_later: {url:url,user_id:userId,saved:"true"}
        })
    })
    .then(result => {
        if (result.status === 204)
        {
            alert("Added to Watch later")
            document.querySelectorAll(".btn")[6].textContent = "Video Saved"
        }
        else
        {
            alert("Oh something happened"+result)
        }
    })
    .catch(error => console.log(error))
}

function fetchWatchLater()
{
    fetch("http://localhost:3000/only_watch_laters") 
    .then(resp => resp.json())
    .then(data => { 
        allWatchLaters = data
 })
}
