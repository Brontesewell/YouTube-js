let request = {"installed":{"client_id":"194452378069-nftdcam2u762n5opb6rd63e30rjhlru1.apps.googleusercontent.com","project_id":"level-array-267823","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"KiJQsrKaV5_5HnHUlQzvU8_g","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}
console.log(request);

// 194452378069-jdp2s0ug7l55mhi602uc3cgf0lupusvd.apps.googleusercontent.com

// B0qhxT_TykOaYCEUGRvRrAuM

const key = "&key=AIzaSyA169Pi-_WqugCQKdDQSpidq82hqf4ayYc";
const url = "https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId="
const songChannel = ["UC0C-w0YjGpqDXGB8IHb662A","UCANLZYMidaCbLQFWXBC95Jg"]//[Ed Sheeran(5),Taylor Swift(5)]

document.addEventListener("DOMContentLoaded", function(){
    songChannel.forEach(channel => {fetchData(channel)}) 

})

function fetchData(channelId) 
{
    //songs
    fetch(url+channelId+key) 
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        // console.log(listOfId(data))
})
}

function listOfId(songs)
{
    let songList = [];
    for (let song in songs.items) 
    {   if (songs.items[song].contentDetails.upload)
        {   
            console.log(songs.items[song].contentDetails.upload.videoId)
            let songUrl = "https://www.youtube.com/watch?v="+songs.items[song].contentDetails.upload.videoId
            songList.push(songUrl);
            // console.log(songList)
        }
    }
    renderSingleSong(songs)
    return songList;
}

function renderSingleSong(songs) {
}



function toogleWatchLater() {
    const dogInfo = document.getElementById("watchlater");
  
     dogInfo.addEventListener("click", function(event){
         if (event.target.tagName === "BUTTON") {
             if (event.target.textContent == "Watch Later"){
                 event.target.textContent = "Saved"
             } else {
                event.target.textContent = "Watch Later"
          
             }
         }
        })
    }