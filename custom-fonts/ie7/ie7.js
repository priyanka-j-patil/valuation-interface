/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mss\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mss-iconfinder_file-excel-o_1608476': '&#xe912;',
		'mss-sort': '&#xe911;',
		'mss-eye': '&#xe910;',
		'mss-logout': '&#xe90f;',
		'mss-minus': '&#xe90e;',
		'mss-loginArrow': '&#xe900;',
		'mss-key': '&#xe901;',
		'mss-user': '&#xe902;',
		'mss-downArrow': '&#xe903;',
		'mss-right': '&#xe904;',
		'mss-Add': '&#xe905;',
		'mss-edit': '&#xe906;',
		'mss-delete': '&#xe907;',
		'mss-logo': '&#xe908;',
		'mss-menu': '&#xe909;',
		'mss-menuClose': '&#xe90a;',
		'mss-search': '&#xe90b;',
		'mss-save': '&#xe90c;',
		'mss-cancel': '&#xe90d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/mss-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
