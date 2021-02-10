<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" :src="book.urlImage" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{{book.title}}</a>
        </h4>
        <h5>{{book.price}}€</h5>
        <p class="card-text">{{book.description}}</p>
      </div>
      <div class="card-footer">
        <star-rating
            :max-rating="5"
            :rating="book.note"
            :read-only="true"
            :star-size="20"
            :inline="true"
            :show-rating="false"/>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating"
export default {
  name: "Product",
  props : ["book"],
  components: {StarRating}
}

</script>

<style scoped>

</style>