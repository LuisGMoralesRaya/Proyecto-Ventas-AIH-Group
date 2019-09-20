require('./styles/index.scss');
import jquery from 'jquery';


jquery(() => {
    if (window.location.search.indexOf('track=yes') > -1) {
        alert('track present');
    } else {
        alert('track not here');
    }
});