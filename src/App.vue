<template>
  <div id="app">
      <prodect-list-one></prodect-list-one>
      <prodect-list-two></prodect-list-two>
  </div>
</template>

<script>
import prodectListOne from "./components/prodectListOne.vue"
import prodectListTwo from "./components/prodectListTwo.vue"
export default {
  data(){
    return{

    }
  },
  components:{
    "prodect-list-one":prodectListOne,
    "prodect-list-two":prodectListTwo,
  }
}
</script>

<style>
</style>
