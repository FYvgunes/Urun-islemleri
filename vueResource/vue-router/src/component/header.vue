<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-pills">
          <router-link to="/" tag="li" active-class="active" exact>
            <a>Home</a>
          </router-link>

          <router-link active-class="active" to="/user" tag="li" exact>
            <a>User2</a>
          </router-link>

        </ul>

      </div>
    </div>
  </div>
</template>
