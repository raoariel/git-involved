$( document ).ready(function() {
    loadUsers();
});


function updateUserModal(user,img,text) {
  var background_style = "url('" + img + "') no-repeat center center"
  $(".modal-content").css("background", background_style);
  text += "<br><a href='http://www.github.com/"+user+"' id='link'>View "+"<span id='link-name'>"+user+"</span>"+"'s Profile</a>"
  $(".modal-body").html(text);
  
};


$("#skill-search").select2({
  placeholder: "Type to search by skills or interests.",
  allowClear: true
});

function updateUsersDisplay(data){
    var display_users = $("#user-blocks");
    display_users.empty();
    var user_profiles = JSON.parse(data);
    // console.log(user_profiles);
    var adding_current_user = "";
    for(var user in user_profiles) {
      console.log(user_profiles[user]);
      var skills = user_profiles[user][0];
      var interests = user_profiles[user][1];
      adding_current_user += "<div class='col-xs-4 col-sm-3 col-md-3'>";
      adding_current_user += "<div class='grid wow zoomIn' id='"+user+"'>";
      adding_current_user += "<figure class='effect-bubba'>";
      adding_current_user += "<img src='https://github.com/identicons/"+user+".png' alt='img01'/>";
      adding_current_user += "<figcaption><h2>";
      adding_current_user += "<span>"+user+"</span></h2>";
      adding_current_user += "<p>"+skills+"<br><br>"+interests+"</p>";
      adding_current_user += "</figcaption></figure></div></div>";
    }
    display_users.append(adding_current_user);

    $( "figure" ).click(function() {
      var figure = $(this).html();
      var user = $(this).find("span").text();
      var img_src = $(this).find("img").prop('src');
      var figure_text = $(this).find("figcaption").html();
      updateUserModal(user,img_src,figure_text);
      $("#user-modal").modal();
    });

}

function loadUsers(){
  $.ajax({
      url: "/getUsers/",
      type: "GET",
      async: true,
      success: function(data) {
          console.log(data);
          updateUsersDisplay(data);
      }
  });
}

function searchUsers(){
  var data = ""; 
  $('#skill-search :selected').each(function(i, selected){ 
      data += $(selected).text() + ":"; 
  });
  console.log(data);
  if (data == "") {
    loadUsers();
  } else {
    $.ajax({
        url: "/searchUsers/",
        data: {params:data},
        type: "GET",
        async: true,
        success: function(data) {
            console.log(data);
            updateUsersDisplay(data);
        }
    });
  }
}