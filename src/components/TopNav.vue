<template>
  <div class="nav">
    <div class="sub-nav">
      <div class="figure">
        <p>{{ initials }}</p>
      </div>
      <p>{{ userData}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userData() {
      const data = localStorage.getItem("data");
      // let newData = JSON.stringify(data)
      // console.log(newData)
      return data;
    },
    initials() {
      const userName = localStorage.getItem("data");
      let names = userName.split(" ");
      return names.length > 1
        ? names[0].charAt(0) + names[1].charAt(0)
        : names[0].charAt(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 28px 48px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  display: flex;
  justify-content: end;

  .sub-nav {
    display: flex;
    gap: 0 16px;
    align-items: center;
    width: max-content;
  }
  .figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    background-color: #b2bdfa;

    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: #4057d3;
    }
  }
}
</style>
