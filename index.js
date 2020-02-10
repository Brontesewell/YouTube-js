// const key = "&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ";
const key = "&key=AIzaSyA169Pi-_WqugCQKdDQSpidq82hqf4ayYc";
const url = "https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId="
const songChannel = ["UC0C-w0YjGpqDXGB8IHb662A","UCANLZYMidaCbLQFWXBC95Jg"]//[Ed Sheeran(5),Taylor Swift(5)]
const gamesChannel = ["UCfDT9kxAHL6M5Ssnbw02vZw","UCEe2aqK4fgDYTOjkZvTvang","UChhGJONwU_9ODfq5oy1dUaQ"] //[KCH Games TV,KingJoe83,HowAboutBeirut(Prank)]
let songList = [];
let gameList = [];

document.addEventListener("DOMContentLoaded", function(){
    // songChannel.forEach(channel => { fetchSong(channel) })
    gamesChannel.forEach(channel => { fetchGames(channel) })

    listenForButtons();
})

function fetchSong(channelId) 
{
    fetch(url+channelId+key) 
    .then(resp => resp.json())
    .then(data => {
        listOfSongs(data)
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
    .then(data => {
        listOfGames(data)
})
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
        console.log(" you are in the sports tab")
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
        console.log("you are in the movies tab")
    }
    else if (event.target.textContent === 'My Profile')
    {
        document.getElementById("dog-info").style.display = "none"
    }
}