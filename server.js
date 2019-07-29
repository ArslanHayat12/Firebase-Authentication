var getImageUrls = require("get-image-urls");
// const sharp = require('sharp');

// let inputFile  = "https://t-ec.bstatic.com/images/hotel/max1024x768/172/172999448.jpg";
// let outputFile = "https://t-ec.bstatic.com/images/hotel/max1024x768/172/172999448.jpg";

// sharp(inputFile).resize({ height: 1560, width: 1600 }).toFile(outputFile)
//     .then(function(newFileInfo) {
//         console.log("Success");
//     })
//     .catch(function(err) {
//         console.log("Error occured");
//     });

const list = [
  //lakes
  "Attabad Lake",
  "Ansoo Lake",
  "Banjosa Lake",
  "Borith Lake",
  "Chitta Katha Lake",
  "Daral Lake",
  "Dudipatsar Lake",
  "Hana Lake",
  "Handarap Lake",
  "Karambar Lake",
  "Kundol Lake",
  "Lulusar Lake",
  "Mahodand Lake",
  "Pari Lake",
  "Pyala Lake",
  "Rama Lake",
  "Ratti Gali Lake",
  "Rush Lake",
  "Saral Lake",
  "Saiful Muluk",
  "Shangrila Lake",
  "Saidgai Lake",
  "Shounter Lake",
  "Sheosar Lake",
  "Satpara Lake",

  //resorts
  "Malam Jabba ski resort",
  "Naltar ski resort",
  "Nathia Gali",
  "Shimshal",
  "Rattu",

  //valleys
  "Astore Valley",
  "Bagh Valley",
  "Chitral Valley",
  "Golaghmuli Valley",
  "Hunza Valley",
  "Indus Valley",
  "Ishkoman Valley",
  "Jhelum Valley (Kashmir)",
  "Leepa Valley",
  "Kaghan Valley",
  "Kalasha Valleys",
  "Khaplu Valley",
  "Kumrat Valley",
  "Neelam Valley",
  "Nagar Valley",
  "Naltar Valley",
  "Skardu Valley",
  "Swat Valley",
  "Soon Valley",
  "Yasin Valley",
  "Dhani Waterfall",
  "Chotok Waterfalls",
  "Jarogo Waterfall",
  "Manthokha Waterfall",
  "Sajikot Waterfall",
  "Shingrai Waterfall",
  "Pir Ghaib Waterfall",
  "Hanna-Urak Waterfall",
  "Neela Sandh Waterfall",

  //Lahore
  "Minar-e-Pakistan",
  "Badshahi Mosque",
  "Suneri Mosque",
  "Masjid of Mariyam Zamani",
  "Neevin Mosque",
  "Dai Anga Mosque",
  "Shab Bhar Mosque",
  "Wazir Khan Mosque",
  "Moti Masjid (Lahore Fort)",
  "Muhammad Saleh Kamboh Mosque",
  "Masjid Shuhada",
  "Oonchi Mosque",
  "Lohari Gate Mosque",
  "Shaheed Ganj Mosque",
  "Data Durbar Complex",
  "Grand Jamia Mosque, Lahore",
  "Valmiki Temple",
  "Krishna Mandir, Lahore",
  "Sacred Heart Cathedral, Lahore",
  "Badami Bagh",
  ///////////////////////punjab
  "Lahore Fort",
  "Harrapa",
  "Taxila",
  "Chauburji",
  "Derawar Fort",
  "Rohtas Fort",
  "Noor Mahal",
  "Hiran Minar",
  "Katas Raj Temples",
  "Khewra Salt Mine",
  "Shalimar Gardens",
  "Tomb of Jahangir and his wife Nur Jahan and her brother Asif Khan",
  "Uch",
  //Hilly Areas
  "Murree",
  "Bhurban",
  "Patriata",
  "Fort Munro",
  //Lakes
  "Khabikki Lake",
  "Namal Lake",
  "Uchhali Lake",
  //Valleys
  "Phugla",
  "Soan Sakaser Valley",
  "Soon Valley",
  //Rivers
  "Sindh River",
  "Chenab River",
  "Sutlaj River",
  "Ravi River",
  "Jhelum River",
  "Bunhar River",
  "Korang River",
  "Soan River",
  "Swan River",
  "Panjnad River",
  //////////////////////////////////////Azad Kashmir
  "Ganga Choti",
  "Neelam Valley",
  "Sharda",
  "Arang Kel",
  //Valleys
  "Bandala Valley",
  "Jhelum Valley (Kashmir)",
  "Kas Chanatar",
  "Leepa Valley",
  "Neelam Valley",
  "Samahni Valley",
  "Bagh Valley",
  //Lakes
  "Chitta Katha Lake",
  "Baghsar Lake",
  "Banjosa Lake",
  "Ganga Lake",
  "Ratti Gali Lake",
  "Saral Lake",
  "Shounter Lake",
  "Subri Lake",
  // Rivers
  "Jhelum River",
  "Neelum River",
  "Poonch River",
  " Shingo River",

  /////////////////////////Islamabad
  "Faisal Masjid",
  "Centaurus",
  "Daman-e-Koh",
  "Islamabad Zoo",
  "Lok Virsa Museum",
  "Margalla Hills",
  "Murree Hills",
  "National Herbarium Islamabad",
  "National Monument Islamabad",
  "National Museum of Natural History",
  "Neela Sandh",
  "Nilan Bhotu",
  "Pak-China Friendship Centre",
  "Pir Sohawa",
  "Rawal Lake",
  "Shahdara Village",
  "Shakarparian",
  //Parks

  "Rawal lake view",
  "Ankara Park",
  "Fatima Jinnah Park",
  "Japanese Park",
  "Lake View Park",
  "Playland",
  "Rose & Jasmine Garden",
  //Museums and art galleries

  "Islamabad di Daat",
  "Lok Virsa Museum",
  "National Art Gallery, Islamabad",
  "Pakistan Museum of Natural History",

  //  Mosques and shrines

  "A right view of Shah Faisal Mosque from adjoining yard",
  "Baba Badshah Bani Gala",
  "Bari Imaam",
  "Shah Faisal Mosque",
  "Golra Sharif",
  // Food streets
  "Aabpara Food Street",
  "Blue-Area Food Street",
  "Naan Street in PWD Islamabad",
  //Government buildings

  "Prime Minister Secretariat",
  "Parliament House",
  "Aiwan-e-Sadr - President's official residence",
  "National Institute of Health",
  "National Parliament of Pakistan",
  "Supreme Court of Pakistan",
  ///////////////////Khyber Pakhtunkhwa
  //Valleys
  "Chitral Valley",
  "Kaghan Valley",
  "Kalam Valley",
  "Kumrat Valley",
  "Swat Valley",
  "Shogran",
  //Lakes

  "Ansoo Lake",
  "Daral Lake",
  "Dudipatsar",
  "Kundol Lake",
  "Mahodand Lake",
  "Jabba Zomalu Lake",
  "Katora Lake",
  "Lake Saiful Muluk",
  "Lulusar",
  "Pyala Lake",

  //National Parks
  "Broghil Valley National Park",
  "Chitral National Park",
  "Lulusar-Dudipatsar National Park",
  "Saiful Muluk National Park",
  "Sheikh Buddin National Park",

  // Historic Places
  "Bala Hissar Fort",
  "Chitral Fort",
  "Mahabat Khan Mosque",
  "Kafir Kot",
  "Khyber Pass",
  "Takht-i-Bahi",

  //Gilgit Baltistan
  //Lakes
  "Sheosar Lake in Deosai National Park, Skardu",
  "Satpara Tso Lake in Skardu, Baltistan",
  "Katzura Tso Lake in Skardu, Baltistan",
  "Katpana Lake in Skardu, Baltistan",
  "Zharba Tso Lake in Shigar, Baltistan",
  "Phoroq Tso Lake in Skardu, Baltistan",
  "Lake Kharfak in Gangche, Baltistan",
  "Sozgung Lake in Thalay Valley, Baltistan",
  "Byarsa Tso Lake in Gultari, Astore",
  "Borith Lake in Gojal, upper Hunza, Gilgit",
  "Rama Lake near Astore",
  "Rush Lake near Nagar, Gilgit",
  "Karambar Lake at Kromber Pass Ishkoman Valley, Ghizer District",
  "Barodaroksh Lake in Bar Valley, Nagar",
  "Ghorashi Lake in Ghandus Valley, Kharmang",
  "Attabad Lake, Hunza",
  "Khalti Lake, Ghizer",
  // Mountains
  //Eight-thousanders
  "K2 (Mount Godwin Austin/Chogori)",
  "Nanga Parbat",

  "Gasherbrum l",

  "Broad Peak",

  "Gasherbrum ll",

  //Seven-thousanders
  "Gasherbrum lll",

  "Gasherbrum lV",

  "Masherbrum (K1)",

  "Rakaposhi",

  "Saltoro Kangri (K10)",

  //Balochistan
  " Astola Island",
  "Bolan Pass",
  "Makran Coastal Highway",
  "Gwadar",
  "Hanna Lake",
  "Hingol National Park",
  "Hazarganji-Chiltan National Park",
  "Jiwani Coastal Wetland",
  "Juniperus macropoda",
  "Khuzdar",
  "Kund Malir",
  "Quetta",
  "Mehrgarh",
  "Moola Chotok",
  "Urak Valley",
  "Ziarat",
  "Ziarat Juniper Forest",
  "Hinglaj Mata Temples",

  //Sindh
  "Chaukhandi tombs",
  "Empress Market",
  "Faiz Mahal",
  "Frere Hall",
  "Jehangir Kothari Parade",
  "Kot Diji Fort",
  "Mazar-e-Quaid",
  "Mohenjo-daro",
  "Makli Necropolis",
  "Mohatta Palace",
  "Qasim Fort",
  "Ranikot Fort",
  "Umerkot Fort",
  // Hilly Areas
  "Kirthar Mountains",
  "Karoonjhar Mountains",
  "Gorakh Hill",
  "Lakes",
  "Manchar Lake",
  "Keenjhar Lake",
  "Haleji Lake",
  "Drigh Lake"
];

var wtf = require("wtf_wikipedia");

var fs = require("fs");
var Flickr = require("flickr-sdk");
var flickr = new Flickr("e226c70d117431cad8d6b8eaa26dfbc6");

let arr = [],
  arr2 = [];
// flickr.photos.geo.getLocation({
//   photo_id: "47115231644",
// //  per_page: 200,
//  // extras:["url_l"]
// }).then((x)=>console.log(JSON.stringify(x.body.photo.location,null,3)))
const requests = list.map(x => wtf.fetch(x));
const requests2 = list.map(x =>
  flickr.photos.search({
    text: x,
    per_page: 200,
    extras: ["url_l"]
  })
);
const requests4 = list.map(x =>
  flickr.photos.search({
    text: x,
    per_page: 500,
    extras: ["url_l"]
  })
);
Promise.all(requests4).then(result => {
  arr = result.map((x, i) => {
    return x.body.photos.photo.map(y=>y.url_l).filter(Boolean);
  });
  fs.writeFile(
    "./src/myjsonfile4.json",
    JSON.stringify(arr, null, 3),
    "utf8",
    () => {
      console.log("done");
    }
  );
});

Promise.all(requests2).then(result => {
  arr = result.map((x, i) => {
    return x.body.photos.photo.map(y=>{
      if(y.url_l)
      return ({url_l:y.url_l,id:y.id})
      else 
      return null}).filter(Boolean)[0];
  });
  fs.writeFile(
    "./src/myjsonfile2.json",
    JSON.stringify(arr, null, 3),
    "utf8",
    () => {
      console.log("done");
    }
  );
  const requests3 = result.map(x => {
    if (x.body.photos.photo && x.body.photos.photo.length)
      return flickr.photos.geo.getLocation({
        photo_id: x.body.photos.photo.map(y=>y.id)[0]
        //  per_page: 200,
        // extras:["url_l"]
      });

    return null;
  });
  Promise.all(requests3).then(result2 => {
    arr = result2&&result2.map((x, i) => {
      return x && x.body ? x.body.photo : null;
    });
    fs.writeFile(
      "./src/myjsonfile3.json",
      JSON.stringify(arr, null, 3),
      "utf8",
      () => {
        console.log("done");
      }
    );
  });
});



Promise.all(requests).then(doc => {
  arr = doc.map((x, i) => {
    return {
      title: x ? x.title() : list[i],
      description: x ? x.text() : list[i],
      image: x && x.images(0) ? x.images(0).thumb() : ""
    };
  });

  fs.writeFile(
    "./src/myjsonfile.json",
    JSON.stringify(arr, null, 3),
    "utf8",
    () => {
      console.log("done");
    }
  );
});
