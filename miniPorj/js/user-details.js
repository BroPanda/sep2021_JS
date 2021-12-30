// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.


let users = JSON.parse(localStorage.getItem(`users`));
let userNum = JSON.parse(localStorage.getItem(`user`));
let user = users[userNum];

let userDiv = document.getElementsByClassName(`user`)[0];

let userIDDiv = document.getElementsByClassName(`userID`)[0];
let userNameDiv = document.getElementsByClassName(`userName`)[0];
let userUserNameDiv = document.getElementsByClassName(`userUserName`)[0];
let userPhoneDiv = document.getElementsByClassName(`userPhone`)[0];
let userMailDiv = document.getElementsByClassName(`userMail`)[0];
let userWebSiteDiv = document.getElementsByClassName(`userWebSite`)[0];
let userAddressDiv = document.getElementsByClassName(`userAddress`)[0];
let userCityDiv = document.getElementsByClassName(`userCity`)[0];
let userGeoDiv = document.getElementsByClassName(`userGeo`)[0];
let userLatDiv = document.getElementsByClassName(`userLat`)[0];
let userLngDiv = document.getElementsByClassName(`userLng`)[0];
let userStreetDiv = document.getElementsByClassName(`userStreet`)[0];
let userSuitDiv = document.getElementsByClassName(`userSuit`)[0];
let userZipCodeDiv = document.getElementsByClassName(`userZipCode`)[0];
let userCompanyDiv = document.getElementsByClassName(`userCompany`)[0];
let userBsDiv = document.getElementsByClassName(`userBs`)[0];
let userCatchPhraseDiv = document.getElementsByClassName(`userCatchPhrase`)[0];
let userCompanyNameDiv = document.getElementsByClassName(`userCompanyName`)[0];


userIDDiv.innerText = `id: ${user.id}`
userNameDiv.innerText = `name: ${user.name}`
userUserNameDiv.innerText = `username: ${user.username}`
userPhoneDiv.innerText = `phone: ${user.phone}`
userMailDiv.innerText = `email: ${user.email}`
userWebSiteDiv.innerText = `website: ${user.website}`
userCityDiv.innerText = `city: ${user.address.city}`
userLatDiv.innerText = `lat: ${user.address.geo.lat}`
userLngDiv.innerText = `lng: ${user.address.geo.lng}`
userStreetDiv.innerText = `street: ${user.address.street}`
userSuitDiv.innerText = `suit: ${user.address.suite}`
userZipCodeDiv.innerText = `zip code: ${user.address.zipcode}`
userCompanyNameDiv.innerText = `company name: ${user.company.name}`
userBsDiv.innerText = `bs: ${user.company.bs}`
userCatchPhraseDiv.innerText = `catch phrase: ${user.company.catchPhrase}`




