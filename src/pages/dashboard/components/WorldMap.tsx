import { useLayout } from '@/hooks/useLayout';
import React from 'react';
import WorldMap from "react-svg-worldmap";

export const WorldMapComponent: React.FC = () => {
  const {isDarkMode}=useLayout();
 const data = [
    { country: "us", value: 111000 }, // United States - Combined: New York (72K) + San Francisco (39K)
    { country: "sg", value: 61000 },  // Singapore
    { country: "au", value: 25000 },  // Australia - Sydney
    { country: "gb", value: 23500 },  // United Kingdom - London
    { country: "ca", value: 22000 },  // Canada - Toronto
    { country: "de", value: 19800 },  // Germany - Berlin
    { country: "jp", value: 18500 },  // Japan - Tokyo
    { country: "fr", value: 17200 },  // France - Paris
    { country: "nl", value: 16000 },  // Netherlands - Amsterdam
    { country: "ch", value: 15400 },  // Switzerland - Zurich
    { country: "se", value: 14200 },  // Sweden - Stockholm
    { country: "dk", value: 13000 },  // Denmark - Copenhagen
    { country: "no", value: 12500 },  // Norway - Oslo
    { country: "fi", value: 11800 },  // Finland - Helsinki
    { country: "ie", value: 11000 },  // Ireland - Dublin
    { country: "at", value: 10200 },  // Austria - Vienna
    { country: "be", value: 9800 },   // Belgium - Brussels
    { country: "il", value: 9200 },   // Israel - Tel Aviv
    { country: "nz", value: 8500 },   // New Zealand - Auckland
    { country: "kr", value: 8000 },   // South Korea - Seoul
    { country: "es", value: 7400 },   // Spain - Madrid
    { country: "it", value: 6800 },   // Italy - Milan
    { country: "pt", value: 6200 },   // Portugal - Lisbon
    { country: "cz", value: 5600 },   // Czech Republic - Prague
    { country: "pl", value: 5000 },   // Poland - Warsaw
    { country: "br", value: 4500 },   // Brazil - São Paulo
    { country: "mx", value: 4000 },   // Mexico - Mexico City
    { country: "ar", value: 3500 },   // Argentina - Buenos Aires
    { country: "cl", value: 3000 },   // Chile - Santiago
    { country: "in", value: 2800 },   // India - Bangalore
    { country: "th", value: 2400 },   // Thailand - Bangkok
    { country: "my", value: 2000 },   // Malaysia - Kuala Lumpur
    { country: "ph", value: 1800 },   // Philippines - Manila
    { country: "id", value: 1500 },   // Indonesia - Jakarta
    { country: "vn", value: 1200 },   // Vietnam - Ho Chi Minh City
    { country: "za", value: 1000 },   // South Africa - Cape Town
    { country: "eg", value: 950 },    // Egypt - Cairo
    { country: "ng", value: 900 },    // Nigeria - Lagos
    { country: "ke", value: 850 },    // Kenya - Nairobi
    { country: "gh", value: 800 },    // Ghana - Accra
    { country: "ru", value: 750 },    // Russia - Moscow
    { country: "cn", value: 700 },    // China - Shanghai
    { country: "ua", value: 650 },    // Ukraine - Kyiv
    { country: "tr", value: 600 },    // Turkey - Istanbul
    { country: "ro", value: 580 },    // Romania - Bucharest
    { country: "gr", value: 560 },    // Greece - Athens
    { country: "hu", value: 540 },    // Hungary - Budapest
    { country: "bg", value: 520 },    // Bulgaria - Sofia
    { country: "hr", value: 500 },    // Croatia - Zagreb
    { country: "sk", value: 480 },    // Slovakia - Bratislava
    { country: "si", value: 460 },    // Slovenia - Ljubljana
    { country: "lt", value: 440 },    // Lithuania - Vilnius
    { country: "lv", value: 420 },    // Latvia - Riga
    { country: "ee", value: 400 },    // Estonia - Tallinn
    { country: "cy", value: 380 },    // Cyprus - Nicosia
    { country: "mt", value: 360 },    // Malta - Valletta
    { country: "lu", value: 340 },    // Luxembourg - Luxembourg City
    { country: "is", value: 320 },    // Iceland - Reykjavik
    { country: "li", value: 300 },    // Liechtenstein - Vaduz
    { country: "mc", value: 280 },    // Monaco - Monaco
    { country: "sm", value: 260 },    // San Marino - San Marino
    { country: "va", value: 240 },    // Vatican City
    { country: "ad", value: 220 },    // Andorra - Andorra la Vella
    { country: "co", value: 200 },    // Colombia - Bogotá
    { country: "pe", value: 190 },    // Peru - Lima
    { country: "ve", value: 180 },    // Venezuela - Caracas
    { country: "ec", value: 170 },    // Ecuador - Quito
    { country: "uy", value: 160 },    // Uruguay - Montevideo
    { country: "py", value: 150 },    // Paraguay - Asunción
    { country: "bo", value: 140 },    // Bolivia - La Paz
    { country: "gf", value: 130 },    // French Guiana - Cayenne
    { country: "sr", value: 120 },    // Suriname - Paramaribo
    { country: "gy", value: 110 },    // Guyana - Georgetown
    { country: "fk", value: 100 },    // Falkland Islands - Stanley
    { country: "pk", value: 95 },     // Pakistan - Karachi
    { country: "bd", value: 90 },     // Bangladesh - Dhaka
    { country: "lk", value: 85 },     // Sri Lanka - Colombo
    { country: "mv", value: 80 },     // Maldives - Malé
    { country: "np", value: 75 },     // Nepal - Kathmandu
    { country: "bt", value: 70 },     // Bhutan - Thimphu
    { country: "af", value: 65 },     // Afghanistan - Kabul
    { country: "uz", value: 60 },     // Uzbekistan - Tashkent
    { country: "kz", value: 58 },     // Kazakhstan - Almaty
    { country: "kg", value: 56 },     // Kyrgyzstan - Bishkek
    { country: "tj", value: 54 },     // Tajikistan - Dushanbe
    { country: "tm", value: 52 },     // Turkmenistan - Ashgabat
    { country: "mn", value: 50 },     // Mongolia - Ulaanbaatar
    { country: "kp", value: 48 },     // North Korea - Pyongyang
    { country: "mm", value: 46 },     // Myanmar - Yangon
    { country: "la", value: 44 },     // Laos - Vientiane
    { country: "kh", value: 42 },     // Cambodia - Phnom Penh
    { country: "bn", value: 40 },     // Brunei - Bandar Seri Begawan
    { country: "tl", value: 38 },     // Timor-Leste - Dili
    { country: "pg", value: 36 },     // Papua New Guinea - Port Moresby
    { country: "sb", value: 34 },     // Solomon Islands - Honiara
    { country: "vu", value: 32 },     // Vanuatu - Port Vila
    { country: "fj", value: 30 },     // Fiji - Suva
    { country: "nc", value: 28 },     // New Caledonia - Nouméa
    { country: "pf", value: 26 },     // French Polynesia - Papeete
    { country: "to", value: 24 },     // Tonga - Nuku'alofa
    { country: "ws", value: 22 },     // Samoa - Apia
    { country: "ki", value: 20 },     // Kiribati - Tarawa
    { country: "pw", value: 19 },     // Palau - Ngerulmud
    { country: "nr", value: 18 },     // Nauru - Yaren
    { country: "fm", value: 17 },     // Micronesia - Palikir
    { country: "mh", value: 16 },     // Marshall Islands - Majuro
    { country: "tv", value: 15 },     // Tuvalu - Funafuti
    { country: "ir", value: 14 },     // Iran - Tehran
    { country: "iq", value: 13 },     // Iraq - Baghdad
    { country: "sy", value: 12 },     // Syria - Damascus
    { country: "lb", value: 11 },     // Lebanon - Beirut
    { country: "jo", value: 10 },     // Jordan - Amman
    { country: "ps", value: 9 },      // Palestine - Ramallah
    { country: "sa", value: 8 },      // Saudi Arabia - Riyadh
    { country: "ae", value: 7 },      // UAE - Dubai
    { country: "qa", value: 6 },      // Qatar - Doha
    { country: "kw", value: 5 },      // Kuwait - Kuwait City
    { country: "bh", value: 4 },      // Bahrain - Manama
    { country: "om", value: 3 },      // Oman - Muscat
    { country: "ye", value: 2 },      // Yemen - Sana'a
    { country: "et", value: 140 },    // Ethiopia - Addis Ababa
    { country: "er", value: 138 },    // Eritrea - Asmara
    { country: "dj", value: 136 },    // Djibouti - Djibouti City
    { country: "so", value: 134 },    // Somalia - Mogadishu
    { country: "ug", value: 132 },    // Uganda - Kampala
    { country: "rw", value: 130 },    // Rwanda - Kigali
    { country: "bi", value: 128 },    // Burundi - Gitega
    { country: "tz", value: 126 },    // Tanzania - Dar es Salaam
    { country: "mw", value: 124 },    // Malawi - Lilongwe
    { country: "zm", value: 122 },    // Zambia - Lusaka
    { country: "zw", value: 120 },    // Zimbabwe - Harare
    { country: "bw", value: 118 },    // Botswana - Gaborone
    { country: "na", value: 116 },    // Namibia - Windhoek
    { country: "sz", value: 114 },    // Eswatini - Mbabane
    { country: "ls", value: 112 },    // Lesotho - Maseru
    { country: "mg", value: 110 },    // Madagascar - Antananarivo
    { country: "mu", value: 108 },    // Mauritius - Port Louis
    { country: "sc", value: 106 },    // Seychelles - Victoria
    { country: "km", value: 104 },    // Comoros - Moroni
    { country: "cv", value: 102 },    // Cape Verde - Praia
    { country: "st", value: 100 },    // São Tomé and Príncipe
    { country: "gq", value: 98 },     // Equatorial Guinea - Malabo
    { country: "ga", value: 96 },     // Gabon - Libreville
    { country: "cg", value: 94 },     // Congo - Brazzaville
    { country: "cd", value: 92 },     // DR Congo - Kinshasa
    { country: "cf", value: 90 },     // Central African Republic - Bangui
    { country: "cm", value: 88 },     // Cameroon - Yaoundé
    { country: "td", value: 86 },     // Chad - N'Djamena
    { country: "ne", value: 84 },     // Niger - Niamey
    { country: "bf", value: 82 },     // Burkina Faso - Ouagadougou
    { country: "ml", value: 80 },     // Mali - Bamako
    { country: "sn", value: 78 },     // Senegal - Dakar
    { country: "gm", value: 76 },     // Gambia - Banjul
    { country: "gw", value: 74 },     // Guinea-Bissau - Bissau
    { country: "gn", value: 72 },     // Guinea - Conakry
    { country: "sl", value: 70 },     // Sierra Leone - Freetown
    { country: "lr", value: 68 },     // Liberia - Monrovia
    { country: "ci", value: 66 },     // Côte d'Ivoire - Abidjan
    { country: "tg", value: 64 },     // Togo - Lomé
    { country: "bj", value: 62 },     // Benin - Porto-Novo
    { country: "dz", value: 60 },     // Algeria - Algiers
    { country: "tn", value: 58 },     // Tunisia - Tunis
    { country: "ly", value: 56 },     // Libya - Tripoli
    { country: "sd", value: 54 },     // Sudan - Khartoum
    { country: "ss", value: 52 },     // South Sudan - Juba
    { country: "ma", value: 50 },     // Morocco - Rabat
    { country: "eh", value: 48 },     // Western Sahara - Laayoune
    { country: "mr", value: 46 },     // Mauritania - Nouakchott
    { country: "ao", value: 44 },     // Angola - Luanda
    { country: "mz", value: 42 },     // Mozambique - Maputo
    { country: "by", value: 40 },     // Belarus - Minsk
    { country: "md", value: 38 },     // Moldova - Chișinău
    { country: "am", value: 36 },     // Armenia - Yerevan
    { country: "az", value: 34 },     // Azerbaijan - Baku
    { country: "ge", value: 32 },     // Georgia - Tbilisi
    { country: "al", value: 30 },     // Albania - Tirana
    { country: "mk", value: 28 },     // North Macedonia - Skopje
    { country: "me", value: 26 },     // Montenegro - Podgorica
    { country: "rs", value: 24 },     // Serbia - Belgrade
    { country: "ba", value: 22 },     // Bosnia and Herzegovina - Sarajevo
    { country: "xk", value: 20 },     // Kosovo - Pristina
    { country: "gt", value: 18 },     // Guatemala - Guatemala City
    { country: "bz", value: 16 },     // Belize - Belmopan
    { country: "sv", value: 14 },     // El Salvador - San Salvador
    { country: "hn", value: 12 },     // Honduras - Tegucigalpa
    { country: "ni", value: 10 },     // Nicaragua - Managua
    { country: "cr", value: 8 },      // Costa Rica - San José
    { country: "pa", value: 6 },      // Panama - Panama City
    { country: "cu", value: 4 },      // Cuba - Havana
    { country: "jm", value: 3 },      // Jamaica - Kingston
    { country: "ht", value: 2 },      // Haiti - Port-au-Prince
    { country: "do", value: 1 },      // Dominican Republic - Santo Domingo
    { country: "pr", value: 95 },     // Puerto Rico - San Juan
    { country: "tt", value: 93 },     // Trinidad and Tobago - Port of Spain
    { country: "bb", value: 91 },     // Barbados - Bridgetown
    { country: "lc", value: 89 },     // Saint Lucia - Castries
    { country: "gd", value: 87 },     // Grenada - St. George's
    { country: "vc", value: 85 },     // Saint Vincent and the Grenadines - Kingstown
    { country: "ag", value: 83 },     // Antigua and Barbuda - St. John's
    { country: "dm", value: 81 },     // Dominica - Roseau
    { country: "kn", value: 79 },     // Saint Kitts and Nevis - Basseterre
    { country: "bs", value: 77 }      // Bahamas - Nassau
];

  return (
    <div className="w-full flex justify-center items-center ">
      <WorldMap
      
        color="#A8C5DA"
        size="sm"
        data={data}
        backgroundColor={isDarkMode ? '#2a2a2a':'#F7F9FB'}
        strokeOpacity={0.3}
        tooltipBgColor="#374151"
        tooltipTextColor="white"
      />
    </div>
  );
};
