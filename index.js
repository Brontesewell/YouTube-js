let request = {"installed":{"client_id":"194452378069-nftdcam2u762n5opb6rd63e30rjhlru1.apps.googleusercontent.com","project_id":"level-array-267823","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"KiJQsrKaV5_5HnHUlQzvU8_g","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}
console.log(request);

// 194452378069-jdp2s0ug7l55mhi602uc3cgf0lupusvd.apps.googleusercontent.com

// B0qhxT_TykOaYCEUGRvRrAuM

const key = "&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ";


document.addEventListener("DOMContentLoaded", function(){
     fetchData();
})
function fetchData() 
{
    //songs
    fetch("https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UC0C-w0YjGpqDXGB8IHb662A&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ") //Ed Sheeran
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        console.log(listOfId(data))
})
}

function listOfId(songs)
{
    let songList = [];
    for (let song in songs.items) 
    {   if (songs.items[song].contentDetails.upload.videoId)
        {
            let songUrl = "https://www.youtube.com/watch?v="+songs.items[song].contentDetails.upload.videoId
            songList.push(songUrl);
            // console.log(songList)
        }
    }
    return songList;
}