//data.js
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import pine from '../Images/d-aur.png';
import wiz from '../Images/d-aur1.png';
import cal from '../Images/d-aur2.png';
import cpine from '../Images/c-aur.png';
import cwiz from '../Images/c-aur1.png';
import ccal from '../Images/c-aur2.png';
import img1 from '../Images/img1.jfif';
import img2 from '../Images/img2.jfif';
import img3 from '../Images/img3.jpg';
   
const text1 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae sapien. Sit amet porttitor eget dolor morbi non arcu risus. Tincidunt id aliquet risus feugiat in. Consectetur adipiscing elit ut aliquam purus sit. Pharetra sit amet aliquam id diam maecenas ultricies. Augue eget arcu dictum varius duis at consectetur lorem donec. Ut sem viverra aliquet eget sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Amet nisl suscipit adipiscing bibendum est ultricies integer.",
    "Egestas diam in arcu cursus euismod quis viverra nibh. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Eu mi bibendum neque egestas congue quisque. Integer enim neque volutpat ac. Sodales ut eu sem integer. Pretium vulputate sapien nec sagittis. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Faucibus vitae aliquet nec ullamcorper sit amet. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.",
    "Amet cursus sit amet dictum. Turpis egestas sed tempus urna et pharetra. Lorem donec massa sapien faucibus et molestie. Dignissim diam quis enim lobortis scelerisque. Morbi tincidunt augue interdum velit euismod in. Tortor id aliquet lectus proin nibh nisl. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Volutpat commodo sed egestas egestas. Id diam maecenas ultricies mi eget.",
    "Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Nibh sed pulvinar proin gravida hendrerit lectus. Vitae purus faucibus ornare suspendisse sed nisi lacus. Velit scelerisque in dictum non consectetur a. Vel pretium lectus quam id leo in vitae turpis. Eu non diam phasellus vestibulum lorem sed risus. Tellus integer feugiat scelerisque varius morbi enim nunc. Feugiat sed lectus vestibulum mattis ullamcorper velit. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Adipiscing elit duis tristique sollicitudin nibh sit. Libero nunc consequat interdum varius sit amet mattis.",
     "Turpis massa sed elementum tempus egestas sed sed risus. Morbi tincidunt augue interdum velit. Fermentum et sollicitudin ac orci phasellus. Commodo sed egestas egestas fringilla phasellus. Sit amet aliquam id diam maecenas. Imperdiet proin fermentum leo vel orci porta. Urna condimentum mattis pellentesque id nibh tortor. Sit amet cursus sit amet dictum sit amet.",
   "Etiam erat velit scelerisque in dictum non consectetur a erat. Nullam vehicula ipsum a arcu cursus vitae congue. Tempor orci dapibus ultrices in iaculis nunc sed augue. Massa sapien faucibus et molestie ac feugiat sed. Dolor purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit amet. Malesuada fames ac turpis egestas integer eget. Magna fringilla urna porttitor rhoncus dolor purus non. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Donec enim diam vulputate ut pharetra sit amet. ",
   "Laoreet id donec ultrices tincidunt arcu. In fermentum et sollicitudin ac. Diam sollicitudin tempor id eu. Lacus vel facilisis volutpat est velit.",
    "Interdum consectetur libero id faucibus nisl tincidunt. Dui accumsan sit amet nulla. Non arcu risus quis varius quam quisque id. Praesent tristique magna sit amet purus gravida. Ullamcorper morbi tincidunt ornare massa. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Porttitor rhoncus dolor purus non enim. Enim ut tellus elementum sagittis vitae. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Placerat vestibulum lectus mauris ultrices eros in. Elit eget gravida cum sociis natoque penatibus. ",
     "Praesent elementum facilisis leo vel. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Gravida neque convallis a cras semper auctor neque vitae. Lacus vel facilisis volutpat est velit egestas dui. Amet aliquam id diam maecenas ultricies mi.",
     ""
   ]; 

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
   text: text1,
  
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
      text: text1,
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
      text: text1,
    },

] 
   export default info; 







/* const article1 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
*/