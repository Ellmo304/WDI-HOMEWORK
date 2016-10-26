'use strict';

$(function () {

  var $main = $("main");

  $('.register').on('click', showRegisterForm);
  $('.login').on('click', showLoginForm);
  $main.on('submit', 'form', submitForm);
  $('.weaponsIndex').on('click', getWeapon);
  $('.logout').on("click", logout);

  function showRegisterForm() {
    if (event) event.preventDefault();
    $main.html('\n      <h2>Register</h2>\n      <form method="post" action="/api/register">\n      <div class="form-group">\n      <input class="form-control" name="username" placeholder="Username">\n      </div>\n      <div class="form-group">\n      <input class="form-control" name="email" placeholder="Email">\n      </div>\n      <div class="form-group">\n      <input class="form-control" type="password" name="password" placeholder="Password">\n      </div>\n      <div class="form-group">\n      <input class="form-control" type="password" name="passwordConfirmation" placeholder="Password Confirmation">\n      </div>\n      <button class="btn btn-primary">Register</button>\n      </form>\n      ');
  }

  function showLoginForm() {
    if (event) event.preventDefault();
    $main.html('\n        <h2>Login</h2>\n        <form method="post" action="/api/login">\n        <div class="form-group">\n        <input class="form-control" name="email" placeholder="Email">\n        </div>\n        <div class="form-group">\n        <input class="form-control" type="password" name="password" placeholder="Password">\n        </div>\n        <button class="btn btn-primary">Login</button>\n        </form>\n        ');
  }

  function submitForm() {
    if (event) event.preventDefault();

    var token = localStorage.getItem('token');
    var $form = $(this);

    var url = $form.attr('action');
    var method = $form.attr('method');
    var data = $form.serialize();

    $.ajax({
      url: url,
      method: method,
      data: data,
      beforeSend: function beforeSend(jqXHR) {
        if (token) return jqXHR.setRequestHeader('Authorization', 'Bearer ' + token);
      }
    }).done(function (data) {
      if (data.token) localStorage.setItem('token', data.token);
      getWeapon();
    }).fail(showLoginForm);
  }

  function getWeapon() {
    if (event) event.preventDefault();
    var token = localStorage.getItem('token');
    $.ajax({
      url: '/api/weapons',
      method: "GET",
      beforeSend: function beforeSend(jqXHR) {
        if (token) return jqXHR.setRequestHeader('Authorization', 'Bearer ' + token);
      }
    }).done(showWeapons).fail(showLoginForm);
  }

  function showWeapons(weapons) {
    if (event) event.preventDefault();
    var $row = $('<div class="row"></div>');
    weapons.forEach(function (weapon) {
      $row.append('\n            <div class="col-md-4">\n            <div class="card">\n            <img class="card-img-top" src="' + weapon.image + '" alt="Card image cap">\n            <div class="card-block">\n            <h4 class="card-title">' + weapon.weaponName + '</h4>\n            <p class="card-text">Physical Damage: ' + weapon.physicalDMG + '<br>Auto Attack: ' + weapon.autoAttack + '<br>Delay: ' + weapon.delay + '</p>\n            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n            <button class="edit" data-id="' + weapon._id + '">Edit</button>\n            <button class="delete" data-id="' + weapon._id + '">Delete</button>\n            </div>\n            </div>\n            </div>\n            ');
    });
    $main.html($row);
  }

  function logout() {
    if (event) event.preventDefault();
    localStorage.removeItem("token");
    showLoginForm();
  }
  function isLoggedIn() {
    return !!localStorage.getItem("token");
  }
  if (isLoggedIn()) {
    getWeapon();
  } else {
    showLoginForm();
  }
});