/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name isArray
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isArray = function(value) {
			return Object.prototype.toString.call(value) === '[object Array]';
		};
	})();
}catch(e) {
	console.error(e);
}