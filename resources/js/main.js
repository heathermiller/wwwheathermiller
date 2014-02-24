---
---

// speaker deck viewcounts
var futuresPromises = getSpeakerdeckStats("cv96bzz6", "futures-promises-views");
var picklesSporesScaladays = getSpeakerdeckStats("5gabjggm", "pickles-spores-scaladays");
var sporesStrangeloop = getSpeakerdeckStats("d350fdec", "spores-strangeloop");
var instantPicklesOopsla = getSpeakerdeckStats("8qzwp7pc", "instant-pickles-oopsla");

function getSpeakerdeckStats(key, id) {
  var url = "http://www.kimonolabs.com/api/" + key + "?apikey=6cd6688b9e11a1f5e1dd19d711e87b98";
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

