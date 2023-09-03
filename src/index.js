

// import { strGenerateSeedWords, 
//     boolIsValidWords, 
//     objNostrKeys,
//     objCoinKeys } from "@laantungir/nostr-keys"

// import { ToggleFullScreen } from "@laantungir/utilities"
import QRCode from "qrcode-svg"


// import { ToggleFullScreen } from "/node_modules/@laantungir/utilities"
// import QRCode from "/node_modules/qrcode-svg"



async function registerServiceWorker()
{
    const serviceWorkerUrl = new URL('./sw.mjs', import.meta.url);
    console.log(`Registering service worker file located at ${serviceWorkerUrl} ...`);
    if ('serviceWorker' in navigator)
    {
        try
        {
            const registration = await navigator.serviceWorker.register(serviceWorkerUrl, {type: 'module', scope: '/' });
            console.log('Service worker registered', registration);
        }
        catch (error)
        {
            console.error('Error registering service worker:', error);
        }
    }
    else console.warn('Service workers are not supported.');
}



//////////////////////////////////////////////////////////////////////
// DOM VARIABLES
//////////////////////////////////////////////////////////////////////
const divBody = document.getElementById('divBody')
const divControls = document.getElementById('divControls')
const divSideNav = document.getElementById('divSideNav')
const divSideNavBody = document.getElementById('divSideNavBody')
const divFooter = document.getElementById(`divFooter`)

const svgHam = document.getElementById(`svgHam`)

const divFoot01 = document.getElementById('divFoot01')
const divFoot02 = document.getElementById('divFoot02')
const divFoot03 = document.getElementById('divFoot03')
const divFoot04 = document.getElementById('divFoot04')
const divFoot05 = document.getElementById('divFoot05')



//////////////////////////////////////////////////////////////////////
// SIDENAV
//////////////////////////////////////////////////////////////////////

function openNav() {
    divSideNav.style.zIndex = 3;
    divSideNav.style.width = "80vw";
    LoadSidenav()
  }
  
  function closeNav() {
    divSideNav.style.width = "0vw";
    divSideNav.style.zIndex = -1;
  }
  
  function LoadSidenav() {
    OutStr = "This is the sidenav"
    LastCategory = ""
  
    divSideNavBody.innerHTML = OutStr;
    openNav()
  
  }// function LoadSidenav
  
  
  const UpdateFooter = async () =>{
    divFoot05.innerHTML = objFormat.owner_digest
  }
  

//////////////////////////////////////////////////////////////////////////////
//  EVENTS
//////////////////////////////////////////////////////////////////////////////
svgHam.addEventListener("click", LoadSidenav)
svgXClose.addEventListener("click", closeNav)
// svgCheck.addEventListener("click", MarkAllVisibleAsRead)
// svgCarrot.addEventListener("click", ExpandAllPost)


//////////////////////////////////////////////////////////////////////////////
//  MAIN
//////////////////////////////////////////////////////////////////////////////

// registerServiceWorker()

divFoot01.innerHTML = "Hi ya"
let d = new Date()
console.log(d)



var svg = new QRCode({

    content: "Pretty Fox",
    join: true,
    predefined: false,
    container: "svg-viewbox"

  }).svg()

// console.log(svg)
divBody.innerHTML = svg

