const searchSong = async() => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    const res = await fetch(url)
    const data = await res.json()
    displaySongs(data.data);

}

const displaySongs = songs =>{
    console.log(songs);
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = '';
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
            <div class="col-md-9">
                    <h3 class="lyrics-name">${song.title}</h3>
                    <p class="author lead">Album by <span>${song.artist.name}</span></p>
                    <audio controls>
                        <source src="${song.preview}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                    <button onclick="getLyrics('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `;
        songContainer.appendChild(songDiv);
    });
}

const getLyrics = () =>{
    const url = `https://api.lyrics.ovh/v1/Adele/Hello`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLyrics(data.lyrics));
}

// const getLyrics = async() =>{
//     const url = `https://api.lyrics.ovh/v1/Adele/Hello`;
//     const res = await fetch(url)
//     const data = await res.json()
//     displayLyrics(data.lyrics)

const displayLyrics = lyrics =>{
    const lyricsDiv = document.getElementById('sond-lyrics');
    lyricsDiv.innerText = lyrics;
}