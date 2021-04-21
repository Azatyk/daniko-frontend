<template>
  <section class="reviews">
    <h2 class="reviews-title">Отзывы наших клиентов</h2>
    <div v-swiper="swiperOption" class="swiper-container">
      <i
        class="swiper-button bx bx-chevron-left swiper-button-prev"
        slot="button-prev"
      ></i>
      <div class="swiper-wrapper swiper">
        <div
          class="swiper-slide"
          v-for="(review, index) in reviews"
          :key="index"
        >
          <p class="slide-text">
            {{ review.review }}
          </p>
          <span class="slide-author">{{ review.author }}</span>
        </div>
      </div>
      <i
        class="swiper-button bx bx-chevron-right swiper-button-next"
        slot="button-next"
      ></i>
    </div>
  </section>
</template>

<script>
import reviews from '@/data/reviews.js'
import { directive } from 'vue-awesome-swiper'

export default {
  directives: {
    swiper: directive,
  },
  data() {
    return {
      reviews: reviews,
      swiperOption: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.reviews {
  padding: 100px 0;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    margin-bottom: 45px;
    color: $main-dark;
    font-size: 25px;
  }
}

.swiper {
  display: flex;
  flex-direction: row;
  &-container {
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &-button {
    color: $main-dark;
    font-size: 40px;
    outline: none;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
}

.swiper-slide {
  width: 600px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &-text {
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    text-align: center;
    line-height: 130%;
  }

  &-author {
    color: $main-dark;
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
  }
}
</style>