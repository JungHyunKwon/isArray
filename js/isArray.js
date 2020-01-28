/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	var toStr = Object.prototype.toString;

	/**
	 * @name isArray
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	window.isArray = function(value) {
		return toStr.call(value) === '[object Array]';
	};
})();