function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

window.onload = function() {
    var id = getQueryVariable('id');
    if (id == '1') {
        location.href = "https://xlbzi.cn";
	} else if (id == '2') {
	    location.href = "https://awa.pw";
    } else if (id == '3') {
	    location.href = "https://zuanshijia.top";
    } else if (id == '4') {
	    location.href = "https://www.nekopara.uk";
    } else if (id == '5') {
	    location.href = "https://kina.uno";
    } else if (id == '6') {
	    location.href = "https://blog.kfdzcoffee.cn";
    } else if (id == '7') {
	    location.href = "http://8.138.37.204/";
    } else if (id == '8') {
	    location.href = "https://xiaorin.com";
    }
};