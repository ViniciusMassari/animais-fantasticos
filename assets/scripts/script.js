import initScrollAnimation from "./modules/scroll-animation.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/faq-accordion.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initOperating from "./modules/operating.js";
import initFetchAnimais from "./modules/fetch-animais.js";

const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init()



initScrollAnimation();

initModal();

initToolTip();

initDropDownMenu();

initMenuMobile();

initFetchBitcoin();

initOperating();

initFetchAnimais();
