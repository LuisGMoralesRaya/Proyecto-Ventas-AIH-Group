require('./styles/index.scss');
import $ from "jquery";

$(document).ready(function() {
    alert(colorCodes.back);
    if (window.location.search.indexOf('track=yes') > -1) {
        console.log('track present');
    } else {
        console.log('track not here');
    }
});

require('./assets/js/core.js');