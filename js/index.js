document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, { dismissible: true, startingTop: '10%' });
});


$(function () {

  //localStorage.clear();
  var user = localStorage.getItem("user");
  var loanUser = localStorage.getItem("loanUser");

  if(loanUser){
    var loanUser = JSON.parse(loanUser);
    $("#loan_name").html(loanUser.firstName +"  "+loanUser.lastName);

  }


  if (user) {

    $('.xlogin').hide();


  } else {
    $('.xlogin').show();
  }

  $('#btnLogin').click(function () {
    var username = $('#username').val();
    var password = $('#password').val();
    if(username ==="" || username.length <=0 ){
      alert('Username cannot be empty!');
      return;
    }

    if(password ==="" || password.length <=0 ){
      alert('Password cannot be empty!');
      return;
    }

    if(username === "Davesoncam1982@"  && password=== "Noahdave2018"){
      localStorage.setItem('user',username);
      $('.xlogin').hide();
      location= "#/dashboard";
    }else{
      alert('Invalid username or password.');
    }

  });
})
