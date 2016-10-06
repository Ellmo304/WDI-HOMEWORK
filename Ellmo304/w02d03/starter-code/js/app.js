$(function() {

var $ol = $("ol");



$.each(tweets, function(i, tweets){
  $ol.append('<li class="stream-item">\
    <div class="tweet">\
      <a href="#">\
        <img src="' + tweets.user_thumbnail +'" alt="User image goes here.">\
      </a>\
      <div class="content">\
        <strong class="fullname"> ' + tweets.name + ' </strong>\
        <span>&rlm;</span>\
        <span>@</span><b> ' + tweets.screen_name + '</b>\
        &nbsp;&middot;&nbsp;\
        <small class="time">\
          ' + tweets.created_at + '\
        </small>\
        <p> ' + tweets.text + '</p>\
      </div>\
    </div>\
  </li>');
});


$("#new-tweet-input").keyup(function () {
  var max = 140;
  var length = $(this).val().length;
  $(".tweet-counter").html(140 - length);
  if (length >= max) {
$(this).val(
  function(i, text) {
    return text.substr(0, text.length -1);

  });
  }});

  $("input[type=submit]").click(function(e){
    e.preventDefault();
        $ol.prepend('<li class="stream-item">\
          <div class="tweet">\
            <a href="#">\
              <img src="http://facehoff.herokuapp.com/50/50" alt="User image goes here.">\
            </a>\
            <div class="content">\
              <strong class="fullname">IamHoff</strong>\
              <span>&rlm;</span>\
              <span>@</span><b>pamela</b>\
              &nbsp;&middot;&nbsp;\
              <small class="time">2016-10-05 21:32:31 +0000</small>\
              <p> ' + ($("#new-tweet-input").val()) + '</p>\
            </div>\
          </div>\
        </li>');
      });













});
