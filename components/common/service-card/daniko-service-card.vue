<template>
  <div class="card">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${imagePath})` }"
    ></div>
    <div class="card-text">
      <h3 class="card-title">{{ name }}</h3>
      <nuxt-link :to="`/services/${id}`" class="card-link link">
        <span class="link-label">Подробнее</span>
        <i class="link-icon bx bx-right-arrow-alt"></i>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: $white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.03);
  overflow: hidden;

  &-image {
    width: 100%;
    height: 70%;
    background-size: cover;
    background-position: center top;
  }

  &-text {
    position: relative;
    width: 100%;
    height: 30%;
    padding: 5%;
    box-sizing: border-box;
  }

  &-title {
    color: $main-dark;
    font-size: 18px;
    font-weight: 500;
  }

  &-link {
    position: absolute;
    bottom: 17%;
    right: 5%;
  }
}

.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &-label {
    margin-right: 5px;
    color: $primary;
    font-size: 14px;
  }

  &-icon {
    color: $primary;
    font-size: 20px;
  }
}

@media(max-width: 1024px) {
  .card {
    height: 300px;
  }
}
</style>