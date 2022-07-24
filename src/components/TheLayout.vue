<template>
    <div class="cont">
        <slot name="side-nav"></slot>
    <section class="right-sec">
      <slot name="top-nav"></slot>
      <div class="main">
        <slot name="main"></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name:'TheLayout'
}
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
}
.right-sec {
  width: calc(100% - 320px);
  background: #f3f3f3;

}

.main {
  padding: 32px 48px;

  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
  }
  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 120%;
    color: #1d2128;
  }
}
</style>