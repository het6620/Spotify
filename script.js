console.log('Welcome to spotify');
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();
let audioIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let masterProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let MasterSongName = document.getElementById('MasterSongName');
let songs = [
    {songName: "Sajni Laapataa Ladies" , filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Mere Liye Tum Kaafi Ho" , filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Allah Waariyan (Yaariyan)" , filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Ye Tune Kya Kiya" , filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Those Eyes" , filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Falak Tak Chal Sath Mere" , filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Soulmates" , filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Let me Love You" , filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "Somewhere Only We Know" , filePath: "songs/9.mp3",coverPath: "covers/9.jpg"}
]

masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;

   
      

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    masterProgressBar.value = progress;
})

masterProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = masterProgressBar.value*audioElement.duration/100;

})
const makeAllElementPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove("fa-pause-circle");
        Element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0)
         {  
        makeAllElementPlay();
        audioIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`songs/${audioIndex+1}.mp3`;
        MasterSongName.innerText = songs[audioIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
}
else    {
    audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle")
        gif.style.opacity = 0;
}

    })
})

document.getElementById('Next').addEventListener('click',()=>{
    if(audioIndex>=8){
        audioIndex =0 ;
    }
    else 
        audioIndex+=1;
        audioElement.src=`songs/${audioIndex+1}.mp3`;
        MasterSongName.innerText = songs[audioIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('Previous').addEventListener('click',()=>{
    if(audioIndex<=0){
        audioIndex =8    ;
    }
    else 
        audioIndex-=1;
        audioElement.src=`songs/${audioIndex+1}.mp3`;
        MasterSongName.innerText = songs[audioIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})