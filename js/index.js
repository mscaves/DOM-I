

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Grab elements using getElementsBy....
const grabLogo = document.getElementsByClassName('logo');
console.log(grabLogo);

//Grab an img by ID and update the src image
const grabElById =  document.getElementById('cta-img')
//grabElById.src = "https://cdn.mos.cms.futurecdn.net/J9KeYkEZf4HHD5LRGf799N-1024-80.jpg.webp"

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = "img/logo.png"

//Update text content of button to "Get Started"
const buttonSelector = document.querySelector('.cta-text button');
buttonSelector.textContent = "Get Started";

//Update the Header
//I need to select all of the nav's and enter the text above
const navSelections = document.querySelectorAll('body nav a');
console.log('These are the navSelections', navSelections);
const navArray = Array.from(navSelections);
console.log('Now changed to an array', navArray);

// navArray[0].textContent = siteContent['nav']["nav-item-1"];
// navArray[1].textContent = siteContent['nav']["nav-item-2"];
// navArray[2].textContent = siteContent['nav']["nav-item-3"];
// navArray[3].textContent = siteContent['nav']["nav-item-4"];
// navArray[4].textContent = siteContent['nav']["nav-item-5"];
// navArray[5].textContent = siteContent['nav']["nav-item-6"];

// for (let i = 0; i < navArray.length; i++){
//   navArray[i].textContent = siteContent['nav'][i];
// }

const valuesArray = Object.values(siteContent.nav);

navArray.forEach( (anchorTag, index) => {
  anchorTag.textContent = valuesArray[index];
})

// console.log('this is writing it out', siteContent['nav']['nav-item-1']);
// console.log('using the ith digit', siteContent['nav'][0]);

//update the image
document.getElementById('middle-img').src = "https://laistassets.scprdev.org/i/1547147a7f50c05ce8059bf88145a0e1/5cd48b964566910009be0288-eight.jpg"

//Change the color of the navigation text to be green

