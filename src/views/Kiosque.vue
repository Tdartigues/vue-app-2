<template>
    <div class="container">
      <Carousel></Carousel>
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4">Le bistrot des sport</h1>
          <h2 class="my-3"> Kiosque </h2>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <Product v-for="book in this.json" :key="book.id" :obj="book"></Product>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Product from "../components/Product";
import Carousel from '../components/Carousel';
import axios from "axios";
const apiURL = "http://localhost:3001/magazines"
export default {
  name: "Kiosque",
  components: {Carousel, Product},
  created() {
    this.fetchData()
  },
  data() {
    return {
      json : [],
    }
  },
  methods : {
    fetchData: async function () {
      try {
        axios.get(apiURL)
            .then(res => {
              this.json = (res.data)
            })
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

