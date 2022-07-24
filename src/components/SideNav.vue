<template>
  <section class="left-section">
    <div class="wrapper">
      <nav>
        <figure>
          <img src="../assets/white-logo.svg" alt="" />
        </figure>
      </nav>
      <div class="mid-nav">
        <div class="menu">
          <div class="active">
            <router-link :to="{ name: 'dashboard' }">
              <img src="../assets/dashboard.svg" alt="" />
              <span>Dashboard</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'inventory' }">
              <img src="../assets/inventory.svg" alt="" />
              <span>Inventory</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'categories' }">
              <img src="../assets/categories.svg" alt="" />
              <span>Categories</span>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'settings' }">
              <img src="../assets/account-settings.svg" alt="" />
              <span>Account Settings</span>
            </router-link>
          </div>
        </div>
        <div class="footer" @click="logout()">
          <span>Logout</span>
          <img src="../assets/logout.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  figure {
    width: 42.06px;
    height: 20.8px;

    img {
      width: 100%;
    }
  }
}
.left-section {
  background: #151923;
  height: 100vh;
  width: 320px;
  color: #fff;
  .wrapper {
    width: calc(100% - 57px);
    margin: 0 auto;
    padding: 33.7px 0 0 0;
  }

.mid-nav{
    height: calc(100vh - 54.5px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}


  .menu {
    margin-top: 6.5rem;
   
    a {
      text-decoration: none;
      padding: 18.84px 25.5696px;
      display: flex;
      align-items: center;
      gap: 0 16px;
      border-radius: 8px;
      max-width: 263px;
      color: #fff;

    }
    a.router-link-exact-active{
        background: #2656d1;
      }
  }

  .footer {
    padding: 14.5px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .footer:hover{
     background: #2656d1;
     border-radius: 8px;
  }
  
}
</style>