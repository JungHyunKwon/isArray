/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function(_toString) {
		'use strict';

		/**
		 * @name isArray
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isArray = function(value) {
			return _toString.call(value) === '[object Array]';
		};
	})(Object.prototype.toString);
}catch(e) {
	console.error(e);
}