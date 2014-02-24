// ---
// ---

/***************************
 * Document initialization
 **************************/
$(document).ready(function(){

// get info from speakerdeck
function getViewcount(url) {
  var json = $.ajax(url)
    .done(function() {
      alert( "success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "complete" );
    });
//   // var osname = "Unknown OS";
//   // if (navigator.appVersion.indexOf("Win") != -1) osname = "Windows";
//   // if (navigator.appVersion.indexOf("Mac") != -1) osname = "Mac OS";
//   // if (navigator.appVersion.indexOf("Linux") != -1) osname = "Linux";
//   // if (navigator.appVersion.indexOf("X11") != -1) osname = "UNIX";
//   // return osname;
}

getViewcount("http://www.kimonolabs.com/api/cv96bzz6?apikey=6cd6688b9e11a1f5e1dd19d711e87b98");

});
