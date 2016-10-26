$(() => {

  let $main = $("main");

  $('.register').on('click', showRegisterForm);
  $('.login').on('click', showLoginForm);
  $main.on('submit', 'form', submitForm);
  $('.weaponsIndex').on('click', getWeapons);
  $('.logout').on("click", logout);
  $main.on("click", ".edit", getWeapon);
  $main.on("click", ".delete", deleteUser);

  function showRegisterForm() {
    if(event) event.preventDefault();
    $main.html(`
      <h2>Register</h2>
      <form method="post" action="/api/register">
      <div class="form-group">
      <input class="form-control" name="username" placeholder="Username">
      </div>
      <div class="form-group">
      <input class="form-control" name="email" placeholder="Email">
      </div>
      <div class="form-group">
      <input class="form-control" type="password" name="password" placeholder="Password">
      </div>
      <div class="form-group">
      <input class="form-control" type="password" name="passwordConfirmation" placeholder="Password Confirmation">
      </div>
      <button class="btn btn-primary">Register</button>
      </form>
      `);
    }

    function showLoginForm() {
      if(event) event.preventDefault();
      $main.html(`
        <h2>Login</h2>
        <form method="post" action="/api/login">
        <div class="form-group">
        <input class="form-control" name="email" placeholder="Email">
        </div>
        <div class="form-group">
        <input class="form-control" type="password" name="password" placeholder="Password">
        </div>
        <button class="btn btn-primary">Login</button>
        </form>
        `);
      }

      function submitForm() {
        if(event) event.preventDefault();


        let token = localStorage.getItem('token');
        let $form = $(this);

        let url = $form.attr('action');
        let method = $form.attr('method');
        let data = $form.serialize();

        $.ajax({
          url,
          method,
          data,
          beforeSend: function(jqXHR) {
            if(token) return jqXHR.setRequestHeader('Authorization', `Bearer ${token}`);
          }
        }).done((data) => {
          if(data.token) localStorage.setItem('token', data.token);
          getWeapon();
        }).fail(showLoginForm);
      }

      function getWeapons() {
        if(event) event.preventDefault();
        let token = localStorage.getItem('token');
        $.ajax({
          url: '/api/weapons',
          method: "GET",
          beforeSend: function(jqXHR) {
            if(token) return jqXHR.setRequestHeader('Authorization', `Bearer ${token}`);
          }
        }).done(showWeapons)
        .fail(showLoginForm);
      }

      function showWeapons(weapons) {
        if(event) event.preventDefault();
        let $row = $('<div class="row"></div>');
        weapons.forEach((weapon) => {
          $row.append(`
            <div class="col-md-4">
            <div class="card">
            <img class="card-img-top" src="${weapon.image}" alt="Card image cap">
            <div class="card-block">
            <h4 class="card-title">${weapon.weaponName}</h4>
            <p class="card-text">Physical Damage: ${weapon.physicalDMG}<br>Auto Attack: ${weapon.autoAttack}<br>Delay: ${weapon.delay}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <button class="edit" data-id="${weapon._id}">Edit</button>
            <button class="delete" data-id="${weapon._id}">Delete</button>
            </div>
            </div>
            </div>
            `);
          });
          $main.html($row);
        }


        function logout() {
          if(event)event.preventDefault();
          localStorage.removeItem("token");
          showLoginForm();
        }
        function isLoggedIn() {
          return !!localStorage.getItem("token");
        }
        if(isLoggedIn()) {
          getWeapons();
        }else{
          showLoginForm();
        }


        function deleteUser() {
          console.log(this.data("id"));
          let token = localStorage.getItem("token");
          $.ajax({
            method: "DELETE",
            url: `http://localhost:3000/api/weapons/${this.data("id")}`,
            beforeSend: function(jqXHR) {
              if(token) return jqXHR.setRequestHeader("Authorization", `Bearer ${token}`);
            }
          }).done((data) => {
            console.log(data + " deleted");
            getWeapons()
            .fail(showLoginForm);
          });
        }

        function getWeapon() {
          let id = $(this.data("id"));
          let token = localStorage.getItem("token");
          $.ajax({
            method: "GET",
            url: `http://localhost:3000/api/weapons/${this.data("id")}`,
            beforeSend: function(jqXHR) {
              if(token) return jqXHR.setRequestHeader("Authorization", `Bearer ${token}`);
            }
          }).done((showEditForm)
          .fail(showLoginForm)
        );}

        function showEditForm(weapon) {
          if(event) event.preventDefault();
          $main.html(`
              <h2>Edit Weapon</h2>
              <form method="put" action="/api/weapons/${weapon._id}">
                  <div class="form-group">
                      <input class="form-control" name="weaponName" placeholder="weaponName" value="${weapon.weaponName}">
                  </div>
                  <div class="form-group">
                      <input class="form-control" name="type" placeholder="type" value="${weapon.type}">
                  </div>
                  <div class="form-group">
                      <input class="form-control" name="physicalDMG" placeholder="physicalDMG" value="${weapon.physicalDMG}">
                  </div>
                  <div class="form-group">
                      <input class="form-control" name="autoAttack" placeholder="autoAttack" value="${weapon.autoAttack}">
                  </div>
                  <div class="form-group">
                      <input class="form-control" name="delay" placeholder="delay" value="${weapon.delay}">
                  </div>
                  <div class="form-group">
                      <input class="form-control" name="image" placeholder="image" value="${weapon.image}">
                  </div>
                  <button class="btn btn-primary">Update</button>
              </form>
        `);
        }







      });
