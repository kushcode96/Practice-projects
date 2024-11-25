let song = document.querySelector("#mysong");
let icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        icon.src = "image/pause.png";
    } else {
        song.pause();
        icon.src = "image/play.png";
    }
})

// icon.onclick = (function(){
//      if(song.paused){
//         song.play();
//         icon.src = "image/pause.png";
//      }else{
//         song.pause();
//         icon.src = "image/play.png";
//      }
// })