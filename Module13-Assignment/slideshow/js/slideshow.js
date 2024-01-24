// REWRITTEN TO TAKE ADVANTAGE OF CLOSURES
const $ = (id) => document.getElementById(id);

const createSlideshow = function () {
  // PRIVATE VARIABLES AND FUNCTIONS
  let timer;
  let play = true;
  // nodes store the current image and caption
  let nodes = { image: null, caption: null };
  let img = { cache: [], counter: 0 };
  let speed = 2000;

  const stopSlideShow = function () {
    clearInterval(timer);
  };

  const displayNextImage = function () {
    let image = img.cache[img.counter];
    nodes.image.src = image.src;
    nodes.caption.innerHTML = image.title;
    img.counter++;
    if (img.counter === img.cache.length) {
      img.counter = 0;
    }
  };

  const setPlayText = function (btn) {
    if (play) {
      btn.value = "Resume";
    } else {
      btn.value = "Pause";
    }
  };

  // PUBLIC METHODS THAT HAVE ACCESS TO PRIVATE VARIABLES AND FUNCTIONS
  return {
    loadImages: function (slides) {
      for (let i = 0; i < slides.length; i++) {
        let image = new Image();
        image.src = slides[i].href;
        image.title = slides[i].title;
        img.cache.push(image);
      }

      return this;
    },
    startSlideShow: function () {
      if (arguments.length === 2) {
        nodes.image = arguments[0];
        nodes.caption = arguments[1];
      }

      // console.log(this.getSpeed());
      timer = setInterval(displayNextImage, this.getSpeed());
      return this;
    },
    createToggleHandler: function () {
      // this refers to the slideshow object
      let me = this;
      // CLOSURE TO BE USED AS THE CLICK EVENT HANDLER
      return function () {
        // 'THIS' IS THE CLICKED BUTTON
        // 'ME' IS THE OBJECT LITERAL
        if (play) {
          stopSlideShow();
        } else {
          me.startSlideShow();
        }

        setPlayText(this);
        // TOGGLE PLAY 'FLAG'
        play = !play;
      };
    },

    setSpeed: function (newSpeed) {
      speed = newSpeed;
      return this;
    },
    getSpeed: function () {
      return speed;
    },

    createSetSpeedHandler: function () {
      let me = this;

      return function () {
        let newSpeed = parseInt(
          prompt("Please enter a new speed in milliseconds: ")
        );
        if (!isNaN(newSpeed) && newSpeed > 0) {
          // need to stop the slideshow and restart it
          stopSlideShow();
          me.setSpeed(newSpeed);
          me.startSlideShow(nodes.image, nodes.caption);
        } else {
          alert("Please enter a valid speed in milliseconds.");
        }
      };
    },
  };
};

// CREATE THE SLIDESHOW OBJECT
const slideshow = createSlideshow();

window.addEventListener("load", () => {
  const slides = [
    { href: "images/backpack.jpg", title: "He backpacks in the Sierras often" },
    { href: "images/boat.jpg", title: "He loves his boat" },
    { href: "images/camaro.jpg", title: "He loves his Camaro more" },
    {
      href: "images/punk.jpg",
      title:
        "He used to be in a punk band and toured with No Doubt and Sublime",
    },
    {
      href: "images/race.jpg",
      title: "He's active and loves obstacle coarse racing",
    },
    {
      href: "images/wakesurf.jpg",
      title: "He loves to wakesurf behind his boat",
    },
  ];
  // START THE SLIDESHOW
  slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
  // PAUSE THE SLIDESHOW
  $("play_pause").onclick = slideshow.createToggleHandler();
  $("set_speed").onclick = slideshow.createSetSpeedHandler();
});
