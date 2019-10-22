import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
chrome_path = "chromedriver.exe"

list = [
  #lakes
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

  #resorts
  "Malam Jabba ski resort",
  "Naltar ski resort",
  "Nathia Gali",
  "Shimshal",
  "Rattu",

  #valleys
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

  #Lahore
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
  ##///////////////////punjab
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
  #Hilly Areas
  "Murree",
  "Bhurban",
  "Patriata",
  "Fort Munro",
  #Lakes
  "Khabikki Lake",
  "Namal Lake",
  "Uchhali Lake",
  #Valleys
  "Phugla",
  "Soan Sakaser Valley",
  "Soon Valley",
  #Rivers
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
  #////////////////////////////////////Azad Kashmir
  "Ganga Choti",
  "Neelam Valley",
  "Sharda",
  "Arang Kel",
  #Valleys
  "Bandala Valley",
  "Jhelum Valley (Kashmir)",
  "Kas Chanatar",
  "Leepa Valley",
  "Neelam Valley",
  "Samahni Valley",
  "Bagh Valley",
  #Lakes
  "Chitta Katha Lake",
  "Baghsar Lake",
  "Banjosa Lake",
  "Ganga Lake",
  "Ratti Gali Lake",
  "Saral Lake",
  "Shounter Lake",
  "Subri Lake",
  # Rivers
  "Jhelum River",
  "Neelum River",
  "Poonch River",
  " Shingo River",

  #///////////////////////Islamabad
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
  #Parks

  "Rawal lake view",
  "Ankara Park",
  "Fatima Jinnah Park",
  "Japanese Park",
  "Lake View Park",
  "Playland",
  "Rose & Jasmine Garden",
  #Museums and art galleries

  "Islamabad di Daat",
  "Lok Virsa Museum",
  "National Art Gallery, Islamabad",
  "Pakistan Museum of Natural History",

  #  Mosques and shrines

  "A right view of Shah Faisal Mosque from adjoining yard",
  "Baba Badshah Bani Gala",
  "Bari Imaam",
  "Shah Faisal Mosque",
  "Golra Sharif",
  # Food streets
  "Aabpara Food Street",
  "Blue-Area Food Street",
  "Naan Street in PWD Islamabad",
  #Government buildings

  "Prime Minister Secretariat",
  "Parliament House",
  "Aiwan-e-Sadr - President's official residence",
  "National Institute of Health",
  "National Parliament of Pakistan",
  "Supreme Court of Pakistan",
  #/////////////////Khyber Pakhtunkhwa
  #Valleys
  "Chitral Valley",
  "Kaghan Valley",
  "Kalam Valley",
  "Kumrat Valley",
  "Swat Valley",
  "Shogran",
  #Lakes

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

  #National Parks
  "Broghil Valley National Park",
  "Chitral National Park",
  "Lulusar-Dudipatsar National Park",
  "Saiful Muluk National Park",
  "Sheikh Buddin National Park",

  # Historic Places
  "Bala Hissar Fort",
  "Chitral Fort",
  "Mahabat Khan Mosque",
  "Kafir Kot",
  "Khyber Pass",
  "Takht-i-Bahi",

  #Gilgit Baltistan
  #Lakes
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
  # Mountains
  #Eight-thousanders
  "K2 (Mount Godwin Austin/Chogori)",
  "Nanga Parbat",

  "Gasherbrum l",

  "Broad Peak",

  "Gasherbrum ll",

  #Seven-thousanders
  "Gasherbrum lll",

  "Gasherbrum lV",

  "Masherbrum (K1)",

  "Rakaposhi",

  "Saltoro Kangri (K10)",

  #Balochistan
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

  #Sindh
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
  # Hilly Areas
  "Kirthar Mountains",
  "Karoonjhar Mountains",
  "Gorakh Hill",
  "Lakes",
  "Manchar Lake",
  "Keenjhar Lake",
  "Haleji Lake",
  "Drigh Lake"
];

# Fetch url on the basis of country source
def get_url(driver):
    driver.get("https://www.latlong.net/")


def get_structured_data(places):
    geo_data=[]
    lattitude=0
    longitude=0
    for place in places:
        places_input = driver.find_elements_by_name('place')
        if len(places_input):
            places_input = places_input[0]
            places_input.clear()
            places_input.send_keys(place)
            places_input.send_keys(Keys.TAB)
        button_find = driver.find_elements_by_xpath("""//*[@id="btnfind"]""")
        if len(button_find):
            button_find[0].click()
        
        element = driver.find_elements_by_xpath("""//*[@id="lat"]""")
        if len(element):
            lattitude=element[0].get_attribute("value")
            element = driver.find_elements_by_xpath("""//*[@id="lng"]""")
        if len(element):
            longitude=element[0].get_attribute("value")    
        
        geo_data.append({
            "place":place,
            "lattitude":lattitude,
            "longitude":longitude
        })
    return geo_data


driver = webdriver.Chrome(chrome_path)
get_url(driver)

data=get_structured_data(["Lahore","Karachi","Islamabad"])
final_result = json.dumps(data, indent=2)
f= open("record.json","w")
f.write(final_result)
print(final_result)

