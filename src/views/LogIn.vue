<template>
  <div class="container">
    <section class="section1">
      <div class="wrapper">
        <nav>
          <img src="../assets/black-logo.svg" alt="" />
        </nav>
        <div class="body">
          <div class="heading-info">
            <h1>Login</h1>
            <div class="underscore"></div>
            <p>Sign in to start managing your inventory like a boss.</p>
          </div>
          <div class="form">
            <form @submit.prevent="logIn">
              <div>
                <label for="email">Email</label><br />
                <input type="text" name="email" id="email" v-model="userInfo.email" />
              </div>

              <div>
                <label for="password">Password</label> <br />
                <input type="password" name="password" id="password" v-model="userInfo.password" />
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account?
              <router-link :to="{ name: 'signUp' }">Sign up</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <figure>
        <img src="../assets/mobile-login-bro.svg" alt="" />
      </figure>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      axios
        .post(
          "http://localhost:3000/api//users/auth/signin",
          this.userInfo
        )
        .then((response) =>{
          // localStorage.setItem('token',response.data.data.token)
          localStorage.setItem('data', response.data.data.fullName)
          localStorage.setItem('id', response.data.data._id)
          // console.log(response.data.data)
          this.$router.push('/dashboard')
        //  alert(response.data.message)
         })
        .catch((error) => {
        alert('Email or Password wrong')
        console.log(error)});
    },
  },
};
</script>

<style lang="scss" scoped>
$base-color: #873ab6;

.section1 {
  background: #f5f7fc;

  .wrapper {
    width: calc(100% - 122px);
    margin: 0 auto;
    padding: 33.7px 0 100px 0;
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

      a {
        color: #2656d1;
        text-decoration: none;
      }
    }
  }
}

.section2 {
  display: none;
}

@media only screen and (min-width: 768px) {
  .container {
    height: 100vh;
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
      // margin: 167px auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>