<template>
  <the-layout>
    <template v-slot:side-nav> <SideNav /></template>
    <template v-slot:top-nav> <TopNav /></template>
    <template v-slot:main>
      <h1>Overview</h1>
      <div class="card-container">
        <div>
          <p>Product Types</p>
          <h2>24</h2>
        </div>
        <div>
          <p>Categories</p>
          <h2>3</h2>
        </div>
        <div>
          <p>Sales-July</p>
          <h2>¢2,400</h2>
        </div>
        <div>
          <p>Inventory Value</p>
          <h2>¢12,620</h2>
        </div>
      </div>
      <p>Recently Added</p>
    </template>
  </the-layout>
</template>

<script>
import TheLayout from "@/components/TheLayout.vue";
import TopNav from "@/components/TopNav.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  components: { SideNav, TopNav, TheLayout },
};
</script>


<style lang="scss" scoped>

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

  .card-container {
    margin-top: 8px;
    margin-bottom: 89px;
    display: flex;
    gap: 0 16px;
    // justify-content: space-between;
    align-items: center;

    div {
      width: 244px;
      padding: 16px 32px;
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
      border-radius: 8px;

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        color: #595f69;
        margin-bottom: 6px;
      }
    }
  }
}
</style>

