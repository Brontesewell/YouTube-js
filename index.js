// const key = "&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ";
const key = "&key=AIzaSyA169Pi-_WqugCQKdDQSpidq82hqf4ayYc";
const url = "https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId="
const songChannel = ["UC0C-w0YjGpqDXGB8IHb662A","UCANLZYMidaCbLQFWXBC95Jg"]//[Ed Sheeran(5),Taylor Swift(5)]

let songList = [];

document.addEventListener("DOMContentLoaded", function(){
    songChannel.forEach(channel => { fetchData(channel) })
    console.log(songList)
    listenForButtons();
    toogleWatchLater()
})

function fetchData(channelId) 
{
    //songs
    fetch(url+channelId+key) 
    .then(resp => resp.json())
    .then(data => {
        listOfId(data)
})
}

function listOfId(data)
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



function toogleWatchLater() {
    const dogInfo = document.getElementById("watchlater");
  
     dogInfo.addEventListener("click", function(event){
         if (event.target.tagName === "BUTTON") {
             if (event.target.textContent == "Watch Later"){
                 event.target.textContent = "Saved"
                 debugger
             } else {
                event.target.textContent = "Watch Later"
             }
         }
        })
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
           let i = 0
            for (const song in songList) 
            {
                let createLi = document.createElement("Li")
                let createA = document.createElement("a")
                createA.textContent = songList[song].Title.split("(")[0]
                // createA.setAttribute("href",`${songList[song].url}`)
                createA.setAttribute('id', `${i++}`)
                createA.setAttribute('onclick','showInfo()')
                createA.onclick = function() {showInfo();};
                createLi.appendChild(createA)
                ulTag.appendChild(createLi)
            }
            
                //  ulTag.addEventListener("click", function(event) {
                //     debugger
                //     const infoDiv = document.getElementById("dog-info")

                //  })
                
                
                
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
        console.log("you are in the games tab")
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



function showInfo() {
    const dogContainer = document.getElementById("sidebar")
    dogContainer.addEventListener("click", function(event) {
        
        const info = document.getElementById("dog-info")
        
     
        const pTag = document.createElement("p")
        pTag.textContent = songList[parseInt(event.target.id)].Title
        
        info.innerHTML = ""

        const songInfo = `
        <h3>${songList[parseInt(event.target.id)].Title}</h3>
        <br>
        <a href="${songList[event.target.id].url}">${songList[parseInt(event.target.id)].url}</a>
        <br>
        <br>
        <button type="button" id="watchlater" class="btn btn-dark">Watch Later</button>
        <br>
        <br>
      <div class="btn-group">
          <button>Like +</button>
          <p id="numoflikes">0 Likes</p>
          <button>Dislike -</button>
        </div>
        `
        info.innerHTML += songInfo

    })
}