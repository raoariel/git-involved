function updateUserModal(img,text) {
  var background_style = "url('" + img + "') no-repeat center center"
  $(".modal-content").css("background", background_style);
  $(".modal-body").html(text);
  
};

$( "figure" ).click(function() {
  var figure = $(this).html();
  var img_src = $(this).find("img").prop('src');
  var figure_text = $(this).find("figcaption").html();
  updateUserModal(img_src,figure_text);
  $("#user-modal").modal();
});