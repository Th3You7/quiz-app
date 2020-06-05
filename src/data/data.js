import sport from "../imgs/sport.png";
import celebrities from "../imgs/celebrities.png";
import art from "../imgs/art.png";
import film from "../imgs/films.png";
import music from "../imgs/music.png";

const data = {
  allCategories: ["sport", "celebrities", "art", "film", "music"],
  categories: {
    sport: {
      id: "sport",
      value: 21,
      title: "Sport",
      img: sport,
    },
    celebrities: {
      id: "celebrities",
      value: 26,
      title: "Celebrities",
      img: celebrities,
    },
    art: {
      id: "art",
      value: 25,
      title: "Art",
      img: art,
    },
    film: {
      id: "film",
      value: 11,
      title: "Film",
      img: film,
    },
    music: {
      id: "music",
      value: 12,
      title: "Music",
      img: music,
    },
  },
};

export default data;
