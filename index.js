/*Sports

Movies
 1. Mr Bean -https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCkAGrHCLFmlK3H2kd6isipg&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ"
2. //https://www.youtube.com/watch?v=Nz18QfdLXfM
//https://www.youtube.com/watch?v=ZldYaXKZlrs
//https://www.youtube.com/watch?v=4-JlooqIyFM
//https://www.youtube.com/watch?v=T0JbVgDBz4M



//Sport
//https://www.youtube.com/watch?v=bKOTKHtbM54
//https://www.youtube.com/watch?v=CBWQGb4LyAM
// https://www.youtube.com/watch?v=bIDKhZ_4jLQ
//https://www.youtube.com/watch?v=UVV80kTudSM

//games and pranks
//https://www.youtube.com/watch?v=0Vo4T1-bH2w
//https://www.youtube.com/watch?v=XJnJA7MRxjs
//https://www.youtube.com/watch?v=snTlMy80c_E
//https://www.youtube.com/watch?v=KEW9U7s_zks


 songs

//https://www.youtube.com/watch?v=2Vv-BfVoq4g
//https://www.youtube.com/watch?v=b9DBJsXtays
//https://www.youtube.com/watch?v=m7Bc3pLyij0
//https://www.youtube.com/watch?v=dT2owtxkU8k
//https://www.youtube.com/watch?v=cmSbXsFE3l8
//https://www.youtube.com/watch?v=fLexgOxsZu0
//https://www.youtube.com/watch?v=OPf0YbXqDm0

1. side to side => channel id = UC0076UMUgEng8HORUw_MYHA,channel owner = Ariana Grande - Topic 
2. shape of you => channel id = UC0C-w0YjGpqDXGB8IHb662A,channel owner = Ed Sheeran
3. tylor swift love story => channel id = UCZSa_dpLfYKpJMDvfX7l7-g,channel owner = YlovesMUSIC
4. Taylor Swift - The Man => channel id = UCANLZYMidaCbLQFWXBC95Jg, channel owner = TaylorSwiftVEVO
5. shape of you => channel id = UC0C-w0YjGpqDXGB8IHb662A,channel owner = Ed Sheeran

*/





document.addEventListener("DOMContentLoaded", function(){
     fetchDogs();
    //  pupInfo();
    //  toogleGoodDog();
})
function fetchDogs() {
    // fetch("https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UC_qvG6jGkO9D9qRsBgPDIrQ&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ") // Bronte channel
    // fetch("https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCe-n1jzPybm5hqaA1e9RhhQ&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ") //Hacker full movie
    fetch("https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UC0C-w0YjGpqDXGB8IHb662A&key=AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ") //Ed Sheeran
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        console.log("https://www.youtube.com/watch?v="+data.items[2].contentDetails.upload.videoId)
        renderData(data)
})
    
}

// {kind: "youtube#activityListResponse", etag: ""Fznwjl6JEQdo1MGvHOGaz_YanRU/2R6sBQy09x6PdyGGVbz7EthHoAw"", nextPageToken: "CAUQAA", pageInfo: {…}, items: Array(5)}
// kind: "youtube#activityListResponse"
// etag: ""Fznwjl6JEQdo1MGvHOGaz_YanRU/2R6sBQy09x6PdyGGVbz7EthHoAw""
// nextPageToken: "CAUQAA"
// pageInfo:
// totalResults: 19
// resultsPerPage: 5
// __proto__: Object
// items: Array(5)
// 0:
// kind: "youtube#activity"
// etag: ""Fznwjl6JEQdo1MGvHOGaz_YanRU/q5OGNO2-spDhsB4JZ34IdUwB2PI""
// id: "MTUxNTc3MDA4ODQzNjI0Njg0MjAzOTM3Ng=="
// snippet: {publishedAt: "2019-12-22T10:00:43.000Z", channelId: "UC0C-w0YjGpqDXGB8IHb662A", title: "Ed Sheeran - Put It All On Me (feat. Ella Mai) [Official Video]", description: "Download or Stream No.6 Collaborations Project - o… Haley Shapley↵↵#EdSheeran #EllaMai #PutItAllOnMe", thumbnails: {…}, …}
// contentDetails:
// upload: {videoId: "ryJgDL9jzKk"}
// __proto__: Object
// __proto__: Object
// 1: {kind: "youtube#activity", etag: ""Fznwjl6JEQdo1MGvHOGaz_YanRU/AKBjfy3g6Zyz-IWtzDhhANKWkoU"", id: "MTUxNTc1NjMzODg1NjI0Njg0MjAzOTA1Ng==", snippet: {…}, contentDetails: {…}}
// 2: {kind: "youtube#activity", etag: ""Fznwjl6JEQdo1MGvHOGaz_YanRU/vCW9o0ftNChzZ_jZCwVfP3p9z4s"", id: "MTUxNTc1MDAzNjAzNjI0Njg0MjAzNzY0OA==", snippet: {…}, contentDetails: {…}}
// 3: {kind: "youtube#activity", etag: ""Fznwjl6JEQdo1MGvHOGaz_YanRU/jkFwV3hpz3saGLV0aBYNR_C8g0k"", id: "MTUxNTcwMjEzODI2NjI0Njg0MjAzNzAwOA==", snippet: {…}, contentDetails: {…}}
// 4: {kind: "youtube#activity", etag: ""Fznwjl6JEQdo1MGvHOGaz_YanRU/TTNaOkqzRDkbjhtfWS0M5MP7tSg"", id: "MTUxNTY2NTU3MTU5NjI0Njg0MjAzOTMxMg==", snippet: {…}, contentDetails: {…}}
// length: 5
// __proto__: Array(0)
// __proto__: Object

function renderData(list)
{
let videoId;
    list.forEach(element => {
        element.data.items.forEach(item => {
            if (item.contentDetails.upload.videoId)
            {
                console.log(item.contentDetails.upload.videoId)
            }
            else
            {
                console.log("Not found")
                console.log(item.contentDetails.upload) 
            }
        })
    });
}



// data.items[0].contentDetails.upload.videoId ======= defined
// data.items[0].contentDetails.upload
// {videoId: "ZmPyF8WJrF8"}
// data.items[1].contentDetails.upload
// undefined
// data.items[2].contentDetails.upload
// {videoId: "TBZEy0M0iuo"}
// data.items[4].contentDetails.upload
// {videoId: "yYq0HwRVb3o"}


// function renderPups(pups) {
//     console.log(allDogs)
//     const dogContainer = document.getElementById("dog-bar")
//     dogContainer.innerHTML = ""
//     pups.forEach(pup => {
//         const renderPup = renderSinglePup(pup);
//         dogContainer.innerHTML += renderPup
//     })
// }
// // function renderSinglePup(pup) {
// //     return `
// //     <span id="${pup.id}">${pup.name}</span>
// //     `
// // }
// function pupInfo() {
//     const dogContainer = document.getElementById("dog-bar")
//     dogContainer.addEventListener("click", function() {
//         const dogInfo = document.getElementById("dog-info");
//         const pupSpanId = event.target.id
//         allDogs.forEach(dog => {
//            if (dog.id == pupSpanId) {
//                const dogName = document.createElement("h2")
//                const dogImage = document.createElement("img")
//                const dogButton = document.createElement("button")
//                const dogDiv = document.createElement("div")
//                dogName.textContent = dog.name
//                dogImage.setAttribute("src", dog.image)
//                if(dog.isGoodDog == true ){
//                    dogButton.textContent = "Saved"
//                 } else {
//                 dogButton.textContent = "Watch Later"
//                }
//                dogButton.setAttribute("data-id", dog.id)
//                dogInfo.innerHTML = ""
//                dogDiv.appendChild(dogName)
//                dogDiv.appendChild(dogImage)
//                dogDiv.appendChild(dogButton)
//                dogInfo.appendChild(dogDiv)
//            }
//         })
//     })
// }
// function toogleGoodDog() {
//     const dogInfo = document.getElementById("dog-info");
//     let turn;
//      dogInfo.addEventListener("click", function(event){
//          if (event.target.tagName === "BUTTON") {
//              if (event.target.textContent == "Watch Later"){
//                  event.target.textContent = "Saved"
//                  turn = true;
//              } else {
//                 event.target.textContent = "Watch Later"
//                 turn = false;
//              }
//          }
//          const pupId = event.target.dataset.id
//          allDogs.forEach(dog => {
//             if (dog.id == pupId) {
//                 fetch(`http://localhost:3000/pups/${dog.id}`, {
//                     method: "PATCH",
//                     headers: {
//                         'Content-Type': 'application/json',
//                       },
//                       body: JSON.stringify({
//                             "isGoodDog" : turn
//                       })
//                 }).then(resp => resp.json())
//                 .then(data => {
//                     allDogs = allDogs.map(dog => {
//                         if (dog.id == pupId) {
//                             return data
//                        } else {
//                            return dog
//                        }
//                     })
//                 })
//             }
//         })
//     })
// }