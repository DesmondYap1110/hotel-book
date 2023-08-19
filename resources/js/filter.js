Vue.filter('numberFormat', function(value){
    if(!value)
        return '0';

    return Number(value).toLocaleString('en-US')
});

Vue.filter('toCurrency', function (value, showSymbol, code) {
	if (!value && value != 0) {
    	return 0;
    }

    if(showSymbol == false){
    	var formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2
        });
    }
    else{
    	var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'MYR',
            minimumFractionDigits: 2
        });
    }

    return formatter.format(value);
});

Vue.filter('toStandardDateTime', function(value, showTime){

	var date = moment(value);
	if(!value || !moment(date, 'YYYY-MM-DD', true).isValid())
        return '--Not Stated--';
	else{
		return moment(value).format(showTime ? 'DD-MMM-YYYY, h:mm:ss a' : 'DD-MMM-YYYY');
	}

});

Vue.filter('replaceWhiteSpace', function(value){
    if(!value)
        return '';

    return value.replace(' ', '');
});

Vue.filter('prettyBytes', function(num) {

	if (typeof num !== 'number' || isNaN(num)) {
		throw new TypeError('Expected a number');
		return '';
	}

	var exponent;
	var unit;
	var neg = num < 0;
	var units = [ 'B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];

	if (neg) {
		num = -num;
	}

	if (num < 1) {
		return (neg ? '-' : '') + num + ' B';
	}

	exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1);
	num = (num / Math.pow(1000, exponent)).toFixed(2) * 1;
	unit = units[exponent];

	return (neg ? '-' : '') + num + ' ' + unit;
});

/**
 *
 * @param {String}
 *            value The value string.
 * @param {Number}
 *            decimals The number of decimal places.
 */
Vue.filter('percentage', function(value, decimals) {
	if (!value) {
		value = 0;
	}

	if (!decimals) {
		decimals = 0;
	}

	value = value * 100;
	value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	value = value + '%';

	return value;
});

