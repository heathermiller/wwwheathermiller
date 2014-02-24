---
---

// speaker deck viewcounts
var futuresPromises = getSpeakerdeckStats("6cd6688b9e11a1f5e1dd19d711e87b98", "futures-promises-views");

function getSpeakerdeckStats(apiKey, id) {
  var url = "http://www.kimonolabs.com/api/cv96bzz6?apikey=" + apiKey;
  $.ajax({
    "url": url,
    "crossDomain": true,
    "dataType": "jsonp",
    success: function(json) {
      onSuccessfulResponse(json, id);
    }
  });
};

function onSuccessfulResponse(json, id) {
    var viewcount = json.results.collection1[0].viewcount;
    // var starcount = json.results.collection1[0].starcount.text;
    $("#"+id).text(viewcount);
};

