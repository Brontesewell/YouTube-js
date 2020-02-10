const key = "&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ";
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
    return songList;
}