const places = [
  {
    id: 1,
    title: "Taj Mahal",
    img: "./img/Taj.jpg",
    desc: "One of the most famous historical sites in India, the Taj Mahal of Agra dates back to the 17th century. It was built by Shah Jahan, the Mughal emperor, in the memory of Mumtaz Mahal, his third wife. It is also the abode of the tomb of Shah Jahan himself. The Taj Mahal has intricate carvings and is made entirely of white marble, on the southern banks of the Yamuna River. It is also one of the Seven Wonders of the World.",
  },
  {
    id: 2,
    title: "Agra Fort",
    img: "./img/AgraFort.jpg",
    desc: "One of the oldest historical places in India is the Agra Fort, located in Uttar Pradesh. A true example of the stunning Mughal form of architecture, the 16th century Agra Fort was built during Akbar’s reign and has been recognized as a UNESCO World Heritage Site as well. The structure of the fort also has other different styles of architecture, along with intricate marble and sandstone artwork. It is often also called the Lal Qila by the locals.",
  },
  {
    id: 3,
    title: "Red Fort",
    img: "./img/RedFort.jpg",
    desc: "When it comes to the famous historical places in India, one cannot miss the Red Fort in Delhi. Also popularly known as the Lal Qila, the Red Fort was constructed during Shah Jahan’s reign in the 17th century. Constructed using huge red sandstone walls in the Mughal style of architecture, the highlights of the Red Fort include its beautiful geometric gardens, magnificent balconies and the opulent entertainment halls.",
  },
  {
    id: 4,
    title: "Qutub Minar",
    img: "./img/QutubMinar.jpg",
    desc: "Delhi’s Qutub Minar ranks amongst the top 10 historical places in India. A UNESCO World Heritage Site, the Qutub Minar, also known as the Victory Tower, is the tallest brick minaret in the whole world, standing tall at a height of 72.5 metres. Built of marble and red sandstone, you can also see many beautiful carvings and intricate designs of the Qutub Minar. The Qutub Minar was built in the late 1100s, to celebrate Muslim Dominance in Delhi, after its last Hindu ruler was defeated. The construction was commenced by Qutab-ud-din Aibak, followed by his successors Iltutmish and Firoz Shah Tughlak.",
  },
  {
    id: 5,
    title: "Fatehpur Sikri",
    img: "./img/Fatehpur.jpg",
    desc: "An architectural gem and one of the most exquisite historical places in India is Fatehpur Sikri, a town in the Agra district of Uttar Pradesh. A recognized UNESCO World Heritage Site, Fatehpur Sikri is made predominantly out of red sandstone, and dates back to the late 16th century, when it was founded by Mughal Emperor Akbar. Fatehpur Sikri is completely fortified, and as of now, serves as the abode of Jodha Bai’s Palace, Buland Darwaza, Jama Masjid, Ibadat Khana, as well as the Tomb of Salim Chishti and other attractions.",
  },
  {
    id: 6,
    title: "Hawa Mahal",
    img: "./img/HawaMahal.jpg",
    desc: "Hawa Mahal in Jaipur is one of the best historical places in India, in addition to being a prominent landmark of Rajasthan. Dating back to the 18th century, Hawa Mahal is a 5-storey structure that overlooks the bustling streets of Jaipur. It has also been made in a blend of the Rajput, Mughal and Islamic styles of architecture. Built by Maharaja Sawai Pratap Singh, the Hawa Mahal has been constructed in a way such that the small windows here allow winds to enter the palace and keep it cool during the blazing hot summers.",
  },
];
const placeToInsert = document.getElementById("places");
const nonModal = document.getElementById("nonModal");
const container = document.getElementsByClassName("container");
const modal = document.getElementById("modal");
const goBackButton = document.getElementById("button");
modal.style.display = "none";
placeToInsert.style.display = "flex";

places.forEach((item) => {
  // add a div
  const content = document.createElement("div");
  content.style.backgroundImage = `url(${item.img})`;
  content.classList.add("content");

  // add a title
  const title = document.createElement("h1");
  title.classList.add("title");
  content.appendChild(title);
  title.innerHTML = `${item.title}`;

  //Add info
  const desc = document.createElement("p");
  const newDesc = item.desc.slice(0, 200);
  desc.classList.add("desc");
  desc.innerHTML = `${newDesc}...`;
  content.appendChild(desc);

  //onclick
  content.addEventListener("click", () => {
    placeToInsert.style.display = "none";
    nonModal.style.display = "none";
    modal.style.display = "flex";

    modal.childNodes[1].childNodes[1].childNodes[1].setAttribute("src", `${item.img}`);
    modal.childNodes[1].childNodes[3].childNodes[1].innerHTML = `${item.title}`;
    modal.childNodes[1].childNodes[3].childNodes[3].innerHTML = `${item.desc}`;;
  });

  goBackButton.addEventListener("click", () => {
    placeToInsert.style.display = "flex";
    nonModal.style.display = "inline";
    modal.style.display = "none";
  });

  placeToInsert.appendChild(content);
});
