<template>
  <div class="container">
    <section class="section1">
      <div class="wrapper">
        <nav>
          <img src="../assets/black-logo.svg" alt="" />
        </nav>
        <div class="body">
          <div class="heading-info">
            <h1>Sign Up</h1>
            <div class="underscore"></div>
            <p>Register now and start managing your inventory like a boss</p>
          </div>
          <div class="form">
            <form @submit.prevent="sendData()">
              <div>
                <label for="name">Name</label><br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="userInfo.fullName"
                />
              </div>

              <div>
                <label for="email">Email</label> <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  v-model="userInfo.email"
                />
              </div>

              <div>
                <label for="shop-name">Shop Name</label> <br />
                <input
                  type="text"
                  name="shop-name"
                  id="shop-name"
                  v-model="userInfo.shopName"
                />
              </div>

              <div>
                <label for="password">Password</label> <br />
                <input
                  type="text"
                  name="password"
                  id="password"
                  v-model="userInfo.password"
                />
              </div>

              <div>
                <label for="password-confirm">Password Confirm</label><br />
                <input
                  type="text"
                  name=""
                  id=""
                  v-model="userInfo.confirmPassword"
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account?
              <router-link :to="{ name: 'login' }">Login</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <figure>
        <img src="../assets/subscriber-bro-1.svg" alt="" />
      </figure>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      userInfo: {
        fullName: "",
        email: "",
        shopName: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  methods: {
    sendData() {
      axios
        .post(
          "http://localhost:3000/api/users/signup",
          this.userInfo
        )
        .then((response) => {
          // localStorage.setItem('status',response.data.status)
          // alert(response.data.message)
          // if(response.data.message === 'success'){
          //   }else{
          //     return false
          // }
          console.log(response)
            this.$router.push('/')
          })
          
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
$base-color: #2656d1;

.section1 {
  background: #f5f7fc;

  .wrapper {
    width: calc(100% - 122px);
    margin: 0 auto;
    padding: 33.7px 0 148px 0;
    // display: flex;
  }

  nav {
    img {
      width: 42px;
      height: 20.8px;
    }
  }

  .body {
    margin-top: 5.5519rem;
  }

  .heading-info {
    h1 {
      font-weight: 800;
      font-size: 40px;
      line-height: 130%;
    }
    p {
      margin-top: 22px;
      color: #747880;
      // width: 284px;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 150%;
    }
    .underscore {
      width: 24px;
      height: 5px;
      background: $base-color;
    }

    @media only screen and (min-width: 768px) {
      p {
        width: 284px;
      }
    }
  }

  .form {
    margin-top: 48px;
    max-width: 357px;
    div {
      margin-bottom: 16px;
    }
    label {
      color: #3a3f46;
    }
    input {
      height: 48px;
      width: 100%;
      border: 1px solid #ced1d9;
      border-radius: 4px;
      padding-left: 10px;
    }
    button {
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      height: 56px;
      width: 100%;
      background: $base-color;
      box-shadow: 0px 16px 24px rgba(38, 86, 209, 0.2);
      border-radius: 8px;
      color: #fff;
      border: none;
      margin-top: 16px;
      cursor: pointer;
    }
    p {
      margin-top: 16px;
      text-align: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
    }
    a {
      color: $base-color;
      text-decoration: none;
    }
  }
}

.section2 {
  display: none;
}

@media only screen and (min-width: 768px) {
  .container {
    // height: 100vh;
    display: flex;
    justify-content: space-evenly;
    gap: 0;
  }
  .section1 {
    width: 469px;
  }
  .section2 {
    display: block;
    width: calc(100% - 469px);
    // max-width: 1440px;
    background: $base-color;
    display: flex;
    justify-content: center;
    align-items: center;

    figure {
      height: 580px;
      width: 580px;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
