const key = "&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ";
const ur

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