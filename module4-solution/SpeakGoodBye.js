

(function (window){
  var byeSpeaker = {};
  var speakWord = "Good bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + ' ' + name);
  };
  window.byeSpeaker = byeSpeaker;
})(window)
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";


