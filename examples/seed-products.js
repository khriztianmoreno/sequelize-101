'use strict';

const { Product } = require('./../sqldb');

Product.destroy({ where: {} })
  .then(() => Product.bulkCreate(
    [
      {
        name: "Lunchpod",
        description: "Eu nulla aliquip duis enim. Sunt magna id ut cillum ad consequat tempor sint irure non aliqua. Enim pariatur est ut irure laborum ex.",
        price: 339,
        companyId: 'e6d66673-c20b-41ec-92ee-aa39ca7ad24c'
      },
      {
        name: "Lingoage",
        description: "Aute id ullamco magna tempor in cillum qui adipisicing dolor labore id aliqua magna. Aliquip commodo fugiat adipisicing ut exercitation aute.",
        price: 161,
        companyId: 'e6d66673-c20b-41ec-92ee-aa39ca7ad24c'
      },
      {
        name: "Bizmatic",
        description: "Proident sunt ullamco minim commodo. Occaecat nulla enim laboris minim exercitation amet ea sunt in. Non ipsum qui esse laboris commodo dolore.",
        price: 219,
        companyId: 'e6d66673-c20b-41ec-92ee-aa39ca7ad24c'
      },
      {
        name: "Geoform",
        description: "Consequat fugiat ad ex magna et aliqua nulla aliquip excepteur. Anim eu eiusmod adipisicing veniam cillum dolore.",
        price: 238,
        companyId: 'e6d66673-c20b-41ec-92ee-aa39ca7ad24c'
      },
      {
        name: "Anacho",
        description: "Qui anim exercitation ipsum labore occaecat in quis.",
        price: 242,
        companyId: 'e6d66673-c20b-41ec-92ee-aa39ca7ad24c'
      },
      {
        name: "Knowlysis",
        description: "Irure dolore eu consectetur nulla magna in adipisicing ullamco sit quis et aliqua occaecat nulla.",
        price: 266,
        companyId: 'e6d66673-c20b-41ec-92ee-aa39ca7ad24c'
      },
      {
        name: "Empirica",
        description: "Officia tempor sit eu commodo consectetur Lorem ad proident magna aliqua ad nulla.",
        price: 250,
        companyId: 'e6d66673-c20b-41ec-92ee-aa39ca7ad24c'
      }
    ]
  )
  .then(() => console.log('finished populating products'))
  .catch(err => console.log('error populating products', err)));
