import  initScrollAnimation from "./modules/scroll-animation.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initTabNav from "./modules/tab-nav.js";
import initAccordion from "./modules/faq-accordion.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initOperating from "./modules/operating.js";
import initFetchAnimais from "./modules/fetch-animais.js";

const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']")

smoothScroll.init()

initTabNav();

initScrollAnimation();


initAccordion();

initModal();

initToolTip();

initDropDownMenu();

initMenuMobile();

initFetchBitcoin();

initOperating();

initFetchAnimais();
