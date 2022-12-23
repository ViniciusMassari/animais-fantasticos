import ScrollAnima from "./modules/scroll-anima.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/faq-accordion.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import Operating from "./modules/operating.js";
import fetchAnimais from "./modules/fetch-animais.js";

const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const operating = new Operating("[data-semana]", "ativo");
operating.init();

fetchAnimais("./animais-api.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
