import pine from '../Images/d-aur.png';
import wiz from '../Images/d-aur1.png';
import cal from '../Images/d-aur2.png';
import cpine from '../Images/c-aur.png';
import cwiz from '../Images/c-aur1.png';
import ccal from '../Images/c-aur2.png';
import img1 from '../Images/img1.jfif';
import img2 from '../Images/img2.jfif';
import img3 from '../Images/img3.jpg';

const info = [
  {title:  'Holiday Magic ',
   date: 'October 2021',
   link: '/page1', 
   id: 1, 
   author: "Frostypine",
   body: "About how holidays are related to magic.",
   img: pine,
   clkImg: cpine,
   art: img1,
   bio: "Frostypine is an author noted for her work in fiction, and intimate knowledge of magic",
   post: "this is Holiday Magic",
},
    { 
      title: 'Magic Categorization', 
      date: 'September 2021',
      link: '/page2', 
      id: 2 ,
      author: "Crazy Cauldron",
      body: "About how things related to magic are categorized.",
      img: cal,
      clkImg: ccal,
      art: img3,
      bio: "Also known as Craycal, is a renowned potions mistress, and a leader in the fields of witchcraft and alchemy.",
      post: "this is Magic Categorization",
     },

    { title: 'The Nature of Magic, Fate, and Love',
      date: 'August 2021',
      link: '/page3', 
      id: 3 ,
      author: "Wise Wizard",
      body: "A little philosophical musing on the nature of magic and the universe.",
      img: wiz,
      clkImg: cwiz,
      art: img2,
      bio: "Known more often as just 'the Wise Wiz', is the founder of the magic archive, and is currently a professor at Senchen's Wizard Tower in Gleeve",
      post: "this is The Nature of Magic, Fate and Love",
    },

] 
   export default info; 

