const data = [
  {
    artist: "Operation Ivy",
    title: "Energy",
  },
  {
    artist: "Blink 182",
    title: "Dude Ranch",
  },
  {
    artist: "New Found Glory",
    title: "Sticks and Stones",
  },
];

// Jukebox class, can have many albums
class Jukebox {
  // if no albums are passed in, create an empty array
  constructor(albums = []) {
    this.albums = albums;
  }

  // add Album method
  addAlbum = function (album) {
    this.albums.push(album);
  };

  // get favorite Album method
  favoriteAlbum = function () {
    let max = -1,
      fav;
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].played > max) {
        max = this.albums[i].played;
        fav = this.albums[i];
      }
    }
    return fav.display();
  };
}

// Album class
class Album {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
    this.played = 0;
  }
  play = function () {
    this.played += 1;
  };
  display = function () {
    return `${this.artist}: ${this.title}. The album has been played ${this.played} times.`;
  };
}

// create albums from data
const albums = data.map((album) => new Album(album.artist, album.title));

// create jukebox instance with albums
let jbox = new Jukebox(albums);
// add more albums for testing purpose
jbox.addAlbum(new Album("Green Day", "Dookie"));
jbox.addAlbum(new Album("Taylor Swift", "Folklore"));

// create dropdown menu with albums when page loads
window.addEventListener("load", function () {
  const albumDropdown = document.querySelector("#albumDropdown");
  const defaultOption = document.createElement("option");
  defaultOption.text = "Select an album";
  albumDropdown.appendChild(defaultOption);
  defaultOption.value = -1;
  jbox.albums.forEach((album, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = `${album.title} By ${album.artist}`;
    albumDropdown.appendChild(option);
  });
});

// play button event listener
document.querySelector("#playButton").addEventListener("click", function () {
  const albumDropdown = document.querySelector("#albumDropdown");
  const albumSelectedIndex = albumDropdown.value;
  const albumSelected = jbox.albums[albumSelectedIndex];
  albumSelected.play();
  console.log(albumSelected.display());
});

// favorite button event listener
document
  .querySelector("#favoriteButton")
  .addEventListener("click", function () {
    const favoriteAlbum = jbox.favoriteAlbum();
    console.log(favoriteAlbum);
    const showFavoriteAlbumElement = document.querySelector("#favoriteAlbum");
    // console.log(jbox.albums);
    showFavoriteAlbumElement.innerHTML = `Your favorite album is: ${favoriteAlbum}`;
  });
