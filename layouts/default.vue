<template>
  <div class="page">
    <div class="page-container">
      <daniko-header />
      <nuxt />
    </div>
    <daniko-footer />
  </div>
</template>

<script>
import danikoHeader from '@/components/common/header/daniko-header'
import danikoFooter from '@/components/common/footer/daniko-footer'

export default {
  components: {
    'daniko-header': danikoHeader,
    'daniko-footer': danikoFooter,
  },
}
</script>

<style lang="scss">
.page {
  padding: 0 5%;
  margin: auto;
  max-width: 1140px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

@media(max-width: 1024px) {
  .page {
    padding: 0 80px;
  }
}
</style>