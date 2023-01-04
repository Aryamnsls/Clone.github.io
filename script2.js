console.log("easemyTrip -Aryaman");

// Initialise the variable 

let songIndex = 0;
let audioElement = new Audio('voice1.mp3');
let masterPlay = document.getElementById('masterPlay');
let PriceRange = document.getElementById('PriceRange');
let gif = document.getElementById('gif');
let FlightList = Array.from(document.getElementsByClassName('FlightList'));


let songs = [
    { songName: "Flight From Chandigarh - Delhi ", filePath: "voice1.mp3", coverPath: "covers/EASYMYTRIP.png" },
    { songName: "Flight From Banglore - Chennai ", filePath: "2.mp3", coverPath: "covers/EASYMYTRIP.png" },
    { songName: "Flight From Guwahati - Delhi ", filePath: "3.mp3", coverPath: "covers/EASYMYTRIP.png" },
    { songName: "Flight From Gujarat - Rajasthan ", filePath: "4.mp3", coverPath: "covers/EASYMYTRIP.png" },
    { songName: "Flight From Andaman Nicobar - Sri-Lanka ", filePath: "5.mp3", coverPath: "covers/EASYMYTRIP.png" },
    { songName: "Flight From Delhi - Maldives ", filePath: "6.mp3", coverPath: "covers/EASYMYTRIP.png" },
    { songName: "Flight From Bihar - Chandigarh ", filePath: "7.mp3", coverPath: "covers/EASYMYTRIP.png" },
    { songName: "Flight From Delhi - Trivantampuram ", filePath: "8.mp3", coverPath: "covers/EASYMYTRIP.png" },
    { songName: "Flight From Himachal - Manipur ", filePath: "9.mp3", coverPath: "covers/EASYMYTRIP.png" },


]

FlightList.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].coverPath;
    })
    // audioElement.play();

// Handle pay/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-Dollar');
        masterPlay.classList.add('fa-pause-Dollar');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-Dollar');
        masterPlay.classList.add('fa-play-Dollar');
        gif.style.opacity = 0;
    }

})

// Listen to Events

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // Update Seekbar

    PriceRange = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    PriceRange.value = PriceRange;
})

PriceRange.addEventListener('change', () => {
    audioElement.currentTime = PriceRange.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-dollar');
        e.target.classList.add('fa-pause-dollar');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-dollar');
        masterPlay.classList.add('fa-pause-dollar');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-dollar');
    masterPlay.classList.add('fa-pause-dollar');
})