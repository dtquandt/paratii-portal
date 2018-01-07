/* eslint-disable */
// /*
//
//     MIGRATED FROM paratii-player/tests/helpers.js
//
//     These helper functions need to be migrated (if they are used in the tests or simply deleted)
//
// */
//

import { Paratii, utils } from 'paratii-lib'

// this address will be used as the owner address for all paratii contracts in the tests
let address = '0x9e2d04eef5b16CFfB4328Ddd027B55736407B275'
let privateKey = '399b141d0cc2b863b2f514ffe53edc6afc9416d5899da4d9bd2350074c38f1c6'

// some other addresses and keys used in testing
let address1 = '0xa99dBd162ad5E1601E8d8B20703e5A3bA5c00Be7'
let address99 = '0xa99dBd162ad5E1601E8d8B20703e5A3bA5c00Be7'
let address17 = '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01'
let privateKey17 = '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709'

// an address generated from a seed phrase
let mnemonic23 = 'jelly better achieve collect unaware mountain thought cargo oxygen act hood bridge'
// this is the first HD address generated
let address23 = '0x9e2d04eef5b16CFfB4328Ddd027B55736407B275'

export { address, address1, address99, privateKey, address17, privateKey17, mnemonic23, address23 }

export const SEED = 'road inherit leave arm unlock estate option merge mechanic rate blade dumb'
export const USERADDRESS = '0xdef933d2d0203821af2a1579d77fb42b4f8dcf7b'

export const paratii = new Paratii({
  provider: 'http://127.0.0.1:8545',
  address: address,
  privateKey: privateKey
})
//
// // let web3 = paratii.web3
// // export { web3 }
// export { paratii }
// const add0x = utils.add0x
//

//
// // The beforeEach function is run before each single test
// beforeEach(function () {
//   server.execute(resetDb)
//   browser.execute(nukeLocalStorage)
//   browser.execute(nukeSessionStorage)
// })
//
// export function getProvider () {
//   return Meteor.settings.public.http_provider
// }
//
// export function login (browser, password = 'password') {
//   browser.execute(function (loginPassword) {
//     Meteor.loginWithPassword('guildenstern@rosencrantz.com', loginPassword)
//   }, password)
// }
//
// export function logout (browser) {
//   browser.execute(function () {
//     Meteor.logout()
//   })
// }
//
// export function createUserAndLogin (browser) {
//   let userId = server.execute(createUser)
//   browser.execute(createKeystore, null, userId)
//   browser.waitUntil(function () {
//     return browser.execute(function (userId) {
//       return localStorage.getItem(`keystore-${userId}`)
//     }, userId).value
//   })
//   login(browser)
//   waitForUserIsLoggedIn(browser)
//
//   // set the user's account to that of the wallet -
//   // TODO: this should be done on login, automagically, I suppose
//
//   // account is the address generated from the keystore
//   browser.waitUntil(function () {
//     let account = getEthAccountFromApp()
//     return account
//   })
//   let account = getEthAccountFromApp()
//   server.execute(function (userId, account) {
//     Meteor.users.update(userId, {$set: { 'profile.ptiAddress': account }})
//   }, userId, account)
//   return account
// }
//
// export function createUserKeystore (browser) {
//   let userId = USERADDRESS
//   browser.execute(createKeystore, null, userId)
//   browser.waitUntil(function () {
//     return browser.execute(function (userId) {
//       return localStorage.getItem(`keystore-${userId}`)
//     }, userId).value
//   })
//   let address = getEthAccountFromApp()
//   server.execute(function (userId, address) {
//     Meteor.users.update(userId, {$set: { 'profile.ptiAddress': address }})
//   }, userId, address)
//   return userId
// }
//
// export function assertUserIsLoggedIn (browser) {
//   // assert that the user is logged in
//   let userId = browser.execute(function () {
//     return Meteor.userId()
//   }).value
//   assert.isOk(userId)
// }
//
// export function waitForUserIsLoggedIn (browser) {
//   // wait until the user is logged in
//   browser.waitUntil(function () {
//     return browser.execute(function () {
//       return Meteor.userId()
//     }).value
//   })
// }
//
// export function waitForKeystore (browser) {
//   let userId = browser.execute(function () {
//     return Meteor.userId()
//   }).value
//
//   browser.waitUntil(function () {
//     return browser.execute(function (userId) {
//       return localStorage.getItem(`keystore-${userId}`)
//     }, userId).value
//   })
//   return userId
// }
// export function assertUserIsNotLoggedIn (browser) {
//   // assert that the user is logged in
//   let userId = browser.execute(function () {
//     return Meteor.userId()
//   }).value
//   assert.isNotOk(userId)
// }
//
// export function getEthAccountFromApp () {
//   return browser.execute(function () {
//     const users = require('./imports/api/users.js')
//     let address = users.getUserPTIAddress()
//     return address
//   }).value
// }
//
// export function getAnonymousAddress () {
//   return browser.execute(function () {
//     const wallet = require('./imports/lib/ethereum/wallet.js')
//     const keystore = wallet.getKeystore('anonymous')
//     return keystore.getAddresses()[0]
//   }).value
// }
//
// export function createAnonymousAddress () {
//   return browser.execute(function () {
//     const wallet = require('./imports/lib/ethereum/wallet.js')
//     wallet.createAnonymousKeystoreIfNotExists()
//   }).value
// }
//
// export function getRegistryAddressFromBrowser () {
//   return browser.executeAsync(async function (done) {
//     const contracts = require('./imports/lib/ethereum/contracts.js')
//     return done(await contracts.getRegistryAddress())
//   })
// }
//
// export function resetDb () {
//   Meteor.users.remove({})
//   const { Videos } = require('/imports/api/videos')
//   Videos.remove({'_id': '12345'})
//   Videos.remove({'_id': '12346'})
//   Videos.remove({'_id': '12347'})
//   Videos.remove({'_id': '12348'})
//   Videos.remove({'_id': '23456'})
//   const { Playlists } = require('/imports/api/playlists')
//   Playlists.remove({'_id': '98765'})
//   const { Transactions } = require('/imports/api/transactions')
//   Transactions.remove({'_id': '5000'})
//   Transactions.remove({})
// }
//
// export async function getOrDeployParatiiContracts (server, browser) {
//   let contracts
//   let paratiiRegistryAddress = await server.execute(function () {
//     return Meteor.settings.public.ParatiiRegistry
//   })
//   if (paratiiRegistryAddress) {
//     paratii = new Paratii({
//       provider: 'http://127.0.0.1:8545',
//       registryAddress: paratiiRegistryAddress
//     })
//
//     setRegistryAddress(browser, paratiiRegistryAddress)
//     contracts = await paratii.eth.getContracts()
//   } else {
//     contracts = await paratii.eth.deployContracts()
//     setRegistryAddress(browser, contracts.ParatiiRegistry.address)
//   }
//   return contracts
// }
//
// export function createUser () {
//   return Accounts.createUser({
//     email: 'guildenstern@rosencrantz.com',
//     password: 'password',
//     profile: {
//       name: 'foobar baz',
//       image: 'https://google.com/images/stock.jpg'
//     }
//   })
// }
//
// export function createKeystore (seed, userId) {
//   const wallet = require('./imports/lib/ethereum/wallet.js')
//   wallet.createKeystore('password', seed, userId, function () {
//     // remove the seed from the Session to simulate the situation
//     // where the user has seen and dismissed the dialog
//     Session.set('seed', null)
//   })
// }
//
// export function clearUserKeystoreFromLocalStorage () {
//   localStorage.removeItem(`keystore-${Accounts.userId()}`)
// }
//
// export function nukeLocalStorage () {
//   localStorage.clear()
// }
//
// export function nukeSessionStorage () {
//   window.sessionStorage.clear()
// }
//
// // export function createVideo (id, title, price) {
// //   const video = {
// //     id: id,
// //     title: title,
// //     price: price,
// //     src: 'https://raw.githubusercontent.com/Paratii-Video/paratiisite/master/imagens/Paratii_UI_v5_mobile.webm',
// //     mimetype: 'video/mp4',
// //     stats: {
// //       likes: 150,
// //       dislikes: 10
// //     }
// //   }
// //   Meteor.call('videos.create', video)
// // }
//
// export function createVideo (id, title, description, uploaderName, tags, price) {
//   const video = {
//     id: id,
//     title: title,
//     price: price,
//     description: description,
//     uploader: {
//       name: uploaderName
//     },
//     tags: tags,
//     src: 'https://raw.githubusercontent.com/Paratii-Video/paratiisite/master/imagens/Paratii_UI_v5_mobile.webm',
//     mimetype: 'video/mp4',
//     stats: {
//       likes: 0,
//       likers: [],
//       dislikes: 0,
//       dislikers: []
//     }
//   }
//   Meteor.call('videos.create', video)
// }
//
// export function createPlaylist (id, title, videos) {
//   const playlist = {
//     id: id,
//     title: title,
//     description: 'A playlist for tests!',
//     url: 'test-playlist',
//     videos: videos
//   }
//   Meteor.call('playlists.create', playlist)
// }
//
// export function mustBeTestChain () {
//   let host = server.execute(function () { return paratii.web3.currentProvider.host })
//   let localNodes = 'http://localhost:8545'
//   if (host !== localNodes) {
//     let msg = `These tests can only be run on a local test node (e.g. ${localNodes})- your app is using ${host} instead.`
//     throw Error(msg)
//   }
// }
//
// export function setRegistryAddress (browser, address) {
//   // console.log('setting registry address to', address)
//   global.Meteor = {settings: {public: {ParatiiRegistry: address}}}
//
//   browser.execute(function (address) {
//     const contracts = require('./imports/lib/ethereum/contracts.js')
//     contracts.setRegistryAddress(address)
//     Meteor.settings.public.ParatiiRegistry = address
//   }, address)
// }