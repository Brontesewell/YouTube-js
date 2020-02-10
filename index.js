// const key = "&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ";
const key = "&key=AIzaSyA169Pi-_WqugCQKdDQSpidq82hqf4ayYc";
const url = "https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId="
const songChannel = ["UC0C-w0YjGpqDXGB8IHb662A","UCANLZYMidaCbLQFWXBC95Jg"]//[Ed Sheeran(5),Taylor Swift(5)]
const gamesChannel = ["UCfDT9kxAHL6M5Ssnbw02vZw","UCEe2aqK4fgDYTOjkZvTvang","UChhGJONwU_9ODfq5oy1dUaQ"] //[KCH Games TV,KingJoe83,HowAboutBeirut(Prank)]
const moviesChannel = ["UCkAGrHCLFmlK3H2kd6isipg","UC7p3ER4LwElVAtmgWFdwhgQ"] //[Mr Bean,Monsters Inc Full Movie in English - New Animation Movie]
const sportsChannel = ["UCr5vPy2YUScYtiyAYiGn2Rg","UCRijo3ddMTht_IHyNSNXpNQ"] //[Wrzzer,Dude Perfect]
let songList = [];
let gameList = [];
let movieList = [];
let sportList = [];

document.addEventListener("DOMContentLoaded", function(){
    // songChannel.forEach(channel => { fetchSong(channel) })
    // gamesChannel.forEach(channel => { fetchGames(channel) })
    // moviesChannel.forEach(channel => {fetchMovies(channel)})
    sportsChannel.forEach(channel => {fetchSport(channel)})
    listenForButtons();
})

function fetchSong(channelId) 
{
    fetch(url+channelId+key) 
    .then(resp => resp.json())
    .then(data => { listOfSongs(data) })
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
            sportList.push({Title:sportTitle,url:sportUrl});
        }
    }
    return sportList;
}

function listenForButtons()
{
    document.getElementById("dog-bar").addEventListener("click",handleClick)
}

function handleClick(event)
{
    document.getElementById("dog-info").style.display = "block"
    if (event.target.textContent === 'Songs')
    {
        const ulTag = document.getElementById("side-bar")
        for (const song in songList) 
        {
            let createLi = document.createElement("Li")
            let createA = document.createElement("a")
            createA.textContent = songList[song].Title.split("(")[0]
            createA.setAttribute("href",`${songList[song].url}`)
            createLi.appendChild(createA)
            ulTag.appendChild(createLi)
        }

    }
    else if (event.target.textContent === 'Sport')
    {
        const ulTag = document.getElementById("side-bar")
        for (const sport in sportList) 
        {
            let createLi = document.createElement("Li")
            let createA = document.createElement("a")
            createA.textContent = sportList[sport].Title
            createA.setAttribute("href",`${sportList[sport].url}`)
            createLi.appendChild(createA)
            ulTag.appendChild(createLi)
        }
    }
    else if (event.target.textContent === 'News')
    {
        console.log("you are in the news tab")
    }
    else if (event.target.textContent === 'Games')
    {
        const ulTag = document.getElementById("side-bar")
        for (const game in gameList) 
        {
            let createLi = document.createElement("Li")
            let createA = document.createElement("a")
            createA.textContent = gameList[game].Title
            createA.setAttribute("href",`${gameList[game].url}`)
            createLi.appendChild(createA)
            ulTag.appendChild(createLi)
        }
    }
    else if (event.target.textContent === 'Movies')
    {
        const ulTag = document.getElementById("side-bar")
        for (const movie in movieList) 
        {
            let createLi = document.createElement("Li")
            let createA = document.createElement("a")
            createA.textContent = movieList[movie].Title
            createA.setAttribute("href",`${movieList[movie].url}`)
            createLi.appendChild(createA)
            ulTag.appendChild(createLi)
        }
    }
    else if (event.target.textContent === 'My Profile')
    {
        document.getElementById("dog-info").style.display = "none"
    }
}