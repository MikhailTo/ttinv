import '@babel/polyfill';
import ItcSubmitForm from './_formProcessing';
import General from './_generalScripts';
import Leaflet from './_initLeaflet';
import LinkTop from './_initLinkTop';
import ShrinkNav from './_shrinkNavigation';

const App = {

	/**
	 * App.init
	 */
	init() {
		// General scripts
		function initGeneral() {
			return new General();
		}
		initGeneral();

		// Map
		function initLeaflet() {
			return new Leaflet();
		}
		initLeaflet();


		function initSubmitForm() {
			return new ItcSubmitForm();
		}
		initSubmitForm();

		// Link go to top of page
		function initLinkTop() {
			return new LinkTop();
		}

		function shrinkNav() {
			return new ShrinkNav();
		}

		window.onscroll = function () {
			initLinkTop();
			shrinkNav();
		};
	}
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});