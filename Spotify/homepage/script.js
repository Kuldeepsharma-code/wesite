let profile = document.getElementById("profile");
let views = document.getElementById("views");
let card = document.getElementById("card");
let close = document.getElementById("close");

let bollywood = document.getElementById("bollywood");
let dance = document.getElementById("dance");
let phone = document.getElementById("phone");
let page = document.getElementById("page");
let btn = document.getElementById("btn");
let musicbtn = document.getElementById("musicbtn");
let music = document.getElementById("music");
let liked = document.getElementById("liked");
let likesong = document.getElementById("likesong");
let cancel = document.getElementById("cancle");

profile.addEventListener("click", function() {
    views.style.display = "flex";
    card.style.display = "none";
});


close.addEventListener("click", function() {
    views.style.display = "none";
    card.style.display = "grid";
    dance.style.display = "none";
});


bollywood.addEventListener("click", function() {
    dance.style.display = "flex";
    card.style.display = "none";
    btn.style.display = "none";
    phone.style.background = "linear-gradient(90deg, #121412, #034218)";
});
liked.addEventListener("click", function() {
    likesong.style.display = "flex";
    card.style.display = "none";
    btn.style.display = "none";
    phone.style.background = "linear-gradient(90deg, #121412, #034218)";
});
cancle.addEventListener("click", function() {    likesong.style.display = "none";
    card.style.display = "grid";
    btn.style.display = "flex";
    phone.style.background = "linear-gradient(90deg, #343634, #127332)";
});

page.addEventListener("click", function() {
    dance.style.display = "none";
    card.style.display = "grid";
    btn.style.display = "flex";
    phone.style.background = "linear-gradient(90deg, #343634, #127332)";
    // music.pause();
    // music.currentTime = 0;
    // musicbtn.innerHTML = "&#9654";
});

musicbtn.addEventListener("click", function() {
    if(music.paused){
        music.play();
        musicbtn.innerHTML = "&#10073;&#10073";
    }
    else{
        music.pause();
        musicbtn.innerHTML = "&#9654";
    }
    
});

let songTitle = document.getElementById("songTitle");
let playlist = document.getElementById("playlist");

let songs = [
    { title: "Parda Hata Do", file: "audio file/music.mp3" },
    { title: "aaja sanam", file: "audio file/AajaSanam.mp3" },
    { title: "Lagja", file: "audio file/Lagja.mp3" }    

];
let currentSongIndex = 0;


function loadSong(index) {
    music.src = songs[index].file;
    songTitle.innerText = songs[index].title;
    updateplaylist();
}

function updateplaylist() {
    playlist.innerHTML = "";
    for (let i = 0; i < songs.length; i++) {
        let p = document.createElement("p");
        p.innerText = songs[i].title;

        // ✅ When user clicks a song name, play it
        p.addEventListener("click", function() {
            currentSongIndex = i;
            loadSong(currentSongIndex);
            music.play();
            musicbtn.innerHTML = "&#10073;&#10073"; // pause icon
        });

        playlist.appendChild(p);
    }
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
    music.play();
    musicbtn.innerHTML = "&#10073;&#10073";
}

music.addEventListener("ended", function() {
    nextSong();
});

// Load the first song initially
loadSong(currentSongIndex);

