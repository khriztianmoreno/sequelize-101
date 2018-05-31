'use strict';

const { User, Company } = require('./../sqldb');

User.destroy({ where: {} })
  .then(() => User.bulkCreate(
    [
      {
        name: 'Hicks Kidd',
        role: 'user',
        password: '5b0f78cb5bf11b30a51931e1',
        salt: 'Rachael',
        provider: 'Waller',
        email: 'rachael.waller@waller.info'
      },
      {
        name: 'Cassie Wyatt',
        role: 'admin',
        password: '5b0f78cb4ee116caac2330e3',
        salt: 'Fay',
        provider: 'Manning',
        email: 'fay.manning@manning.net'
      },
      {
        name: 'Campos Barron',
        role: 'admin',
        password: '5b0f78cb83057777b5cc81bf',
        salt: 'Gibbs',
        provider: 'Robertson',
        email: 'gibbs.robertson@robertson.me'
      },
      {
        name: 'Alison Odom',
        role: 'admin',
        password: '5b0f78cb291c83b120de9316',
        salt: 'Wall',
        provider: 'Alexander',
        email: 'wall.alexander@alexander.name'
      },
      {
        name: 'Merrill Leonard',
        role: 'guest',
        password: '5b0f78cb57f4b475bf91634b',
        salt: 'Short',
        provider: 'Rodriquez',
        email: 'short.rodriquez@rodriquez.biz'
      },
      {
        name: 'Therese Horton',
        role: 'guest',
        password: '5b0f78cbe4bd82be67fc44a9',
        salt: 'Abbott',
        provider: 'Pope',
        email: 'abbott.pope@pope.com'
      },
      {
        name: 'Leigh Daniels',
        role: 'admin',
        password: '5b0f78cb99f36aa34e6f8e2d',
        salt: 'Mckee',
        provider: 'Dunlap',
        email: 'mckee.dunlap@dunlap.org'
      },
      {
        name: 'Fox Ortiz',
        role: 'guest',
        password: '5b0f78cbb3f4ff9a9928c76a',
        salt: 'Sargent',
        provider: 'Sampson',
        email: 'sargent.sampson@sampson.io'
      },
      {
        name: 'Terra Vincent',
        role: 'user',
        password: '5b0f78cb743d6d5be1e26dd1',
        salt: 'Minnie',
        provider: 'Rivera',
        email: 'minnie.rivera@rivera.tv'
      },
      {
        name: 'Olivia Meyers',
        role: 'admin',
        password: '5b0f78cb9b62bab13e90d317',
        salt: 'Chapman',
        provider: 'Leach',
        email: 'chapman.leach@leach.ca'
      },
      {
        name: 'Lana Hunt',
        role: 'user',
        password: '5b0f78cb464f1c54b07d60ec',
        salt: 'Bettie',
        provider: 'Bruce',
        email: 'bettie.bruce@bruce.us'
      },
      {
        name: 'Adkins Roth',
        role: 'admin',
        password: '5b0f78cb7a47398e3493eb71',
        salt: 'Tricia',
        provider: 'Serrano',
        email: 'tricia.serrano@serrano.biz'
      },
      {
        name: 'April Riley',
        role: 'guest',
        password: '5b0f78cb334e8499b74edfb2',
        salt: 'Carissa',
        provider: 'Velez',
        email: 'carissa.velez@velez.info'
      },
      {
        name: 'Eliza Goodman',
        role: 'guest',
        password: '5b0f78cb5d259a5fb9fbf9b2',
        salt: 'Willis',
        provider: 'Finch',
        email: 'willis.finch@finch.net'
      },
      {
        name: 'Rhonda Chase',
        role: 'user',
        password: '5b0f78cb79551c7f1f6c3d6e',
        salt: 'Hatfield',
        provider: 'Jimenez',
        email: 'hatfield.jimenez@jimenez.me'
      },
      {
        name: 'Nona Flowers',
        role: 'user',
        password: '5b0f78cb41a5477c8d6bf1b6',
        salt: 'Hahn',
        provider: 'Marsh',
        email: 'hahn.marsh@marsh.name'
      },
      {
        name: 'Fowler Hooper',
        role: 'guest',
        password: '5b0f78cb19f27a2c639e1565',
        salt: 'Mathews',
        provider: 'Long',
        email: 'mathews.long@long.biz'
      },
      {
        name: 'Lynnette Fischer',
        role: 'user',
        password: '5b0f78cb9432c81cd990050d',
        salt: 'Ann',
        provider: 'Sweeney',
        email: 'ann.sweeney@sweeney.com'
      },
      {
        name: 'Deana Gentry',
        role: 'guest',
        password: '5b0f78cbe10dd76b9eab0c96',
        salt: 'Glass',
        provider: 'Steele',
        email: 'glass.steele@steele.org'
      },
      {
        name: 'Jayne Hardin',
        role: 'admin',
        password: '5b0f78cb0bbdd59945d38336',
        salt: 'Rollins',
        provider: 'Davenport',
        email: 'rollins.davenport@davenport.io'
      },
      {
        name: 'Carlene Brennan',
        role: 'admin',
        password: '5b0f78cbaecc388ee2446a5f',
        salt: 'Cynthia',
        provider: 'Roach',
        email: 'cynthia.roach@roach.tv'
      },
      {
        name: 'Harmon Meadows',
        role: 'user',
        password: '5b0f78cb63555de2a9c4b7a9',
        salt: 'Mason',
        provider: 'George',
        email: 'mason.george@george.ca'
      },
      {
        name: 'Boyle Ward',
        role: 'guest',
        password: '5b0f78cbe526c4cba9ce41c5',
        salt: 'Dana',
        provider: 'Head',
        email: 'dana.head@head.us'
      },
      {
        name: 'Pearl Beach',
        role: 'user',
        password: '5b0f78cbd464c2f07bcbc388',
        salt: 'Tammie',
        provider: 'Yang',
        email: 'tammie.yang@yang.biz'
      },
      {
        name: 'Augusta Bernard',
        role: 'admin',
        password: '5b0f78cbc785f57c9f6272de',
        salt: 'Haley',
        provider: 'Mueller',
        email: 'haley.mueller@mueller.info'
      },
      {
        name: 'Francis Mays',
        role: 'guest',
        password: '5b0f78cb4a1d2c87511b9372',
        salt: 'Sally',
        provider: 'Vega',
        email: 'sally.vega@vega.net'
      },
      {
        name: 'Stone Oneil',
        role: 'admin',
        password: '5b0f78cb0496b58e0964afbd',
        salt: 'Meredith',
        provider: 'Francis',
        email: 'meredith.francis@francis.me'
      },
      {
        name: 'Jerry Floyd',
        role: 'admin',
        password: '5b0f78cba538088592729c9b',
        salt: 'Alta',
        provider: 'Battle',
        email: 'alta.battle@battle.name'
      },
      {
        name: 'Freeman Kinney',
        role: 'user',
        password: '5b0f78cb06716938809b378b',
        salt: 'Lindsey',
        provider: 'Foster',
        email: 'lindsey.foster@foster.biz'
      },
      {
        name: 'Sandra Ruiz',
        role: 'user',
        password: '5b0f78cb31b8353116e31e14',
        salt: 'Yesenia',
        provider: 'Torres',
        email: 'yesenia.torres@torres.com'
      },
      {
        name: 'Myra Kane',
        role: 'admin',
        password: '5b0f78cbf1df5007fb1d6dd6',
        salt: 'Bernadette',
        provider: 'Talley',
        email: 'bernadette.talley@talley.org'
      },
      {
        name: 'Tara Rush',
        role: 'admin',
        password: '5b0f78cb4ee489a93657f650',
        salt: 'Flossie',
        provider: 'Delaney',
        email: 'flossie.delaney@delaney.io'
      },
      {
        name: 'Evelyn Brown',
        role: 'admin',
        password: '5b0f78cbf0a270bfe8b3e910',
        salt: 'Austin',
        provider: 'Richard',
        email: 'austin.richard@richard.tv'
      },
      {
        name: 'Elvia Powers',
        role: 'guest',
        password: '5b0f78cb75df29f73a3cb209',
        salt: 'Lola',
        provider: 'Todd',
        email: 'lola.todd@todd.ca'
      },
      {
        name: 'Freida Parsons',
        role: 'admin',
        password: '5b0f78cb60fd5b3a64ba4a32',
        salt: 'Shaw',
        provider: 'Bennett',
        email: 'shaw.bennett@bennett.us'
      },
      {
        name: 'Gallegos Barry',
        role: 'guest',
        password: '5b0f78cbc069d25102ec66f1',
        salt: 'Virgie',
        provider: 'Peck',
        email: 'virgie.peck@peck.biz'
      },
      {
        name: 'Kimberly Fitzpatrick',
        role: 'user',
        password: '5b0f78cbca86851f411cdcc5',
        salt: 'Bryan',
        provider: 'Ferguson',
        email: 'bryan.ferguson@ferguson.info'
      },
      {
        name: 'Bean Jackson',
        role: 'admin',
        password: '5b0f78cb248f3da07e2a6911',
        salt: 'Henson',
        provider: 'Owen',
        email: 'henson.owen@owen.net'
      },
      {
        name: 'Josephine Mayo',
        role: 'admin',
        password: '5b0f78cb61b68c74ecc6150f',
        salt: 'Rhea',
        provider: 'Ingram',
        email: 'rhea.ingram@ingram.me'
      },
      {
        name: 'Rae Hood',
        role: 'admin',
        password: '5b0f78cb7712be2c760d858c',
        salt: 'Janie',
        provider: 'Carson',
        email: 'janie.carson@carson.name'
      },
      {
        name: 'Casandra Matthews',
        role: 'admin',
        password: '5b0f78cbdaad1ec5f3167fc6',
        salt: 'Hutchinson',
        provider: 'Travis',
        email: 'hutchinson.travis@travis.biz'
      },
      {
        name: 'Dunn Porter',
        role: 'guest',
        password: '5b0f78cb4bd821718b9a5867',
        salt: 'Gutierrez',
        provider: 'Hebert',
        email: 'gutierrez.hebert@hebert.com'
      },
      {
        name: 'Rose Mayer',
        role: 'admin',
        password: '5b0f78cbb4bbe0930fe6ced1',
        salt: 'Franco',
        provider: 'Hernandez',
        email: 'franco.hernandez@hernandez.org'
      },
      {
        name: 'Kathie Duncan',
        role: 'admin',
        password: '5b0f78cb021fb3c391d61d51',
        salt: 'Horton',
        provider: 'Garner',
        email: 'horton.garner@garner.io'
      },
      {
        name: 'Eula Thompson',
        role: 'user',
        password: '5b0f78cb725b9ae2a040d8f8',
        salt: 'Bullock',
        provider: 'Whitney',
        email: 'bullock.whitney@whitney.tv'
      },
      {
        name: 'Harriett Blankenship',
        role: 'admin',
        password: '5b0f78cb83f2035bf485b92b',
        salt: 'Fletcher',
        provider: 'Lester',
        email: 'fletcher.lester@lester.ca'
      },
      {
        name: 'Elba Christensen',
        role: 'user',
        password: '5b0f78cb85a05022b7bfccd0',
        salt: 'Morton',
        provider: 'David',
        email: 'morton.david@david.us'
      },
      {
        name: 'Brittany Newman',
        role: 'user',
        password: '5b0f78cb878ac975e3e6c43e',
        salt: 'Neva',
        provider: 'Lawrence',
        email: 'neva.lawrence@lawrence.biz'
      },
      {
        name: 'Valerie Hendrix',
        role: 'guest',
        password: '5b0f78cb540461ed1940edc9',
        salt: 'Marcia',
        provider: 'Butler',
        email: 'marcia.butler@butler.info'
      },
      {
        name: 'Angeline Glenn',
        role: 'user',
        password: '5b0f78cb0781aa8226d8bd41',
        salt: 'Fannie',
        provider: 'Hawkins',
        email: 'fannie.hawkins@hawkins.net'
      },
      {
        name: 'Lakisha Norman',
        role: 'guest',
        password: '5b0f78cb7b8ddf97f64834d4',
        salt: 'Lindsey',
        provider: 'Hayes',
        email: 'lindsey.hayes@hayes.me'
      },
      {
        name: 'Irene Reese',
        role: 'guest',
        password: '5b0f78cb675780d96b640f61',
        salt: 'Hope',
        provider: 'Bonner',
        email: 'hope.bonner@bonner.name'
      }
    ]
  )
  .then(() => console.log('finished populating users'))
  .catch(err => console.log('error populating users', err)));


Company.destroy({ where: {} })
  .then(() => Company.bulkCreate(
    [
      {
        name: "EXOVENT",
        founded: 2006,
        address: "329 Hendrickson Street, Harviell, Montana, 1976",
        userId: 1
      },
      {
        name: "NORSUP",
        founded: 2016,
        address: "732 Clinton Street, Ernstville, Alabama, 8280",
        userId: 2
      },
      {
        name: "NAXDIS",
        founded: 2012,
        address: "356 Court Square, Rodanthe, Nevada, 8104",
        userId: 3
      },
      {
        name: "SENMEI",
        founded: 2005,
        address: "856 Eldert Lane, Hollymead, Northern Mariana Islands, 9422",
        userId: 46
      },
      {
        name: "VOLAX",
        founded: 1994,
        address: "299 Boardwalk , Foxworth, Marshall Islands, 584",
        userId: 11
      },
      {
        name: "BOLAX",
        founded: 2003,
        address: "592 Nichols Avenue, Ogema, Washington, 1549",
        userId: 28
      },
      {
        name: "ENTALITY",
        founded: 1990,
        address: "600 Vine Street, Kersey, Federated States Of Micronesia, 6997",
        userId: 8
      },
      {
        name: "AUSTEX",
        founded: 2015,
        address: "117 Hendrix Street, Sims, District Of Columbia, 9432",
        userId: 35
      },
      {
        name: "COREPAN",
        founded: 2004,
        address: "278 Coventry Road, Farmington, New Mexico, 5635",
        userId: 22
      },
      {
        name: "ENAUT",
        founded: 2017,
        address: "259 Crown Street, Baker, Kentucky, 5407",
        userId: 33
      },
      {
        name: "GENMOM",
        founded: 1993,
        address: "658 Diamond Street, Grenelefe, Connecticut, 5206",
        userId: 24
      },
      {
        name: "ZENSURE",
        founded: 2002,
        address: "789 Gem Street, Como, Oklahoma, 1763",
        userId: 33
      },
      {
        name: "ZORK",
        founded: 2013,
        address: "301 Applegate Court, Enetai, Indiana, 1307",
        userId: 6
      },
      {
        name: "EMTRAC",
        founded: 1990,
        address: "466 Borinquen Pl, Oberlin, Kansas, 4757",
        userId: 14
      },
      {
        name: "FLUMBO",
        founded: 1992,
        address: "352 Newkirk Avenue, Noxen, Louisiana, 2603",
        userId: 7
      },
      {
        name: "IMANT",
        founded: 2009,
        address: "920 Joval Court, Ahwahnee, Delaware, 7876",
        userId: 6
      },
      {
        name: "FITCORE",
        founded: 1990,
        address: "499 Belmont Avenue, Flintville, Arizona, 8192",
        userId: 36
      },
      {
        name: "NURPLEX",
        founded: 2015,
        address: "132 Highlawn Avenue, Coventry, West Virginia, 1146",
        userId: 5
      },
      {
        name: "ARTWORLDS",
        founded: 2001,
        address: "521 Bouck Court, Lutsen, Virginia, 9490",
        userId: 9
      },
      {
        name: "SENMAO",
        founded: 2009,
        address: "611 Seaview Avenue, Vandiver, Illinois, 875",
        userId: 15
      },
      {
        name: "FIBEROX",
        founded: 2004,
        address: "923 Bartlett Place, Garfield, Ohio, 8526",
        userId: 30
      },
      {
        name: "MEDESIGN",
        founded: 2002,
        address: "493 Bushwick Place, Wawona, Rhode Island, 2656",
        userId: 9
      },
      {
        name: "QUINTITY",
        founded: 1996,
        address: "954 Newkirk Placez, Virgie, Utah, 1195",
        userId: 33
      },
      {
        name: "IDEGO",
        founded: 2007,
        address: "253 Utica Avenue, Brooktrails, Oregon, 7439",
        userId: 23
      },
      {
        name: "TELPOD",
        founded: 2018,
        address: "800 Henry Street, Florence, Alaska, 5043",
        userId: 20
      },
      {
        name: "IMKAN",
        founded: 1995,
        address: "647 Gatling Place, Elbert, South Carolina, 4216",
        userId: 37
      },
      {
        name: "VELOS",
        founded: 1994,
        address: "495 Bay Street, Hanover, Colorado, 2241",
        userId: 43
      },
      {
        name: "PYRAMIS",
        founded: 1996,
        address: "569 Provost Street, Windsor, Georgia, 1587",
        userId: 31
      },
      {
        name: "REMOLD",
        founded: 2006,
        address: "217 Lincoln Avenue, Wikieup, Maryland, 5256",
        userId: 36
      },
      {
        name: "PHARMEX",
        founded: 2013,
        address: "985 Jewel Street, Trail, Puerto Rico, 1217",
        userId: 44
      },
      {
        name: "QUAREX",
        founded: 1999,
        address: "370 Cortelyou Road, Mooresburg, Nebraska, 5359",
        userId: 40
      },
      {
        name: "QUADEEBO",
        founded: 2013,
        address: "197 Humboldt Street, Riceville, Virgin Islands, 9712",
        userId: 41
      },
      {
        name: "SNACKTION",
        founded: 1998,
        address: "561 Empire Boulevard, Biehle, Florida, 1252",
        userId: 42
      },
      {
        name: "OBLIQ",
        founded: 2016,
        address: "904 Jackson Court, Gratton, Arkansas, 1109",
        userId: 13
      },
      {
        name: "EQUICOM",
        founded: 2017,
        address: "363 Grafton Street, Witmer, Michigan, 4556",
        userId: 38
      },
      {
        name: "ENTOGROK",
        founded: 2002,
        address: "819 Eaton Court, Ribera, Idaho, 3229",
        userId: 13
      },
      {
        name: "ENQUILITY",
        founded: 2018,
        address: "570 Division Avenue, Tioga, Maine, 7005",
        userId: 25
      },
      {
        name: "ZILLATIDE",
        founded: 2007,
        address: "683 Willmohr Street, Sardis, Wisconsin, 1920",
        userId: 6
      },
      {
        name: "ROCKYARD",
        founded: 1991,
        address: "495 Prospect Street, Bath, American Samoa, 6389",
        userId: 20
      },
      {
        name: "XLEEN",
        founded: 1993,
        address: "830 Woodbine Street, Brogan, Palau, 461",
        userId: 35
      },
      {
        name: "OCEANICA",
        founded: 2015,
        address: "873 Lincoln Terrace, Temperanceville, Minnesota, 2700",
        userId: 8
      },
      {
        name: "MARQET",
        founded: 2012,
        address: "578 Turner Place, Seymour, New Hampshire, 5886",
        userId: 28
      },
      {
        name: "PROXSOFT",
        founded: 2012,
        address: "991 Chester Court, Corriganville, Iowa, 6249",
        userId: 42
      },
      {
        name: "KAGE",
        founded: 1991,
        address: "466 Malta Street, Wiscon, California, 6441",
        userId: 42
      },
      {
        name: "ZOLAREX",
        founded: 2001,
        address: "657 Desmond Court, Sunnyside, New Jersey, 1066",
        userId: 25
      },
      {
        name: "SAVVY",
        founded: 2014,
        address: "964 Kaufman Place, Waumandee, Guam, 1905",
        userId: 22
      },
      {
        name: "PHUEL",
        founded: 1995,
        address: "315 Powell Street, Cornfields, Pennsylvania, 2146",
        userId: 30
      },
      {
        name: "GENESYNK",
        founded: 2013,
        address: "308 Bedell Lane, Belleview, South Dakota, 9975",
        userId: 33
      },
      {
        name: "VENDBLEND",
        founded: 2010,
        address: "939 Leonard Street, Valle, Wyoming, 3086",
        userId: 21
      },
      {
        name: "EMOLTRA",
        founded: 1993,
        address: "125 Vandalia Avenue, Downsville, Hawaii, 5732",
        userId: 32
      },
      {
        name: "DENTREX",
        founded: 2017,
        address: "546 Devoe Street, Eden, North Carolina, 6804",
        userId: 37
      },
      {
        name: "LUNCHPAD",
        founded: 1997,
        address: "785 Christopher Avenue, Frystown, Massachusetts, 928",
        userId: 43
      },
      {
        name: "ZILLIDIUM",
        founded: 2012,
        address: "126 Adler Place, Jackpot, Missouri, 6396",
        userId: 28
      },
      {
        name: "ECRATER",
        founded: 2007,
        address: "834 Bradford Street, Richford, Vermont, 3636",
        userId: 18
      },
      {
        name: "OZEAN",
        founded: 1999,
        address: "180 Seigel Court, Cliffside, Mississippi, 3404",
        userId: 1
      },
      {
        name: "ASSITIA",
        founded: 1990,
        address: "389 Tapscott Avenue, Glenville, New York, 8199",
        userId: 1
      },
      {
        name: "ANOCHA",
        founded: 2006,
        address: "676 Cleveland Street, Gardiner, Texas, 3259",
        userId: 21
      },
      {
        name: "FISHLAND",
        founded: 1994,
        address: "609 Livonia Avenue, Cascades, North Dakota, 6462",
        userId: 31
      },
      {
        name: "ENDICIL",
        founded: 1992,
        address: "168 Arlington Avenue, Leroy, Montana, 5190",
        userId: 2
      },
      {
        name: "NUTRALAB",
        founded: 2018,
        address: "289 Ashland Place, Walker, Alabama, 4016",
        userId: 22
      },
      {
        name: "ACCUSAGE",
        founded: 1995,
        address: "451 Madeline Court, Concho, Nevada, 3799",
        userId: 38
      },
      {
        name: "DAISU",
        founded: 2014,
        address: "384 John Street, Herbster, Northern Mariana Islands, 8482",
        userId: 40
      }
    ]
  )
  .then(() => console.log('finished populating Companies'))
  .catch(err => console.log('error populating Companies', err)));
