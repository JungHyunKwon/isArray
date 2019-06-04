/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		var _toString = Object.prototype.toString;

		/**
		 * @name isArray
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isArray = Array.isArray || function(value) {
			return _toString.call(value) === '[object Array]';
		};
	})();
}catch(e) {
	console.error(e);
}