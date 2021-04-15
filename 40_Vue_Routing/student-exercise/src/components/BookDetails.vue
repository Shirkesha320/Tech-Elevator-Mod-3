<template>
  <div class="book-details">
      <h1 class="book-title"> {{book.title}} </h1>
     <h2 class="book-author"> {{book.author}} </h2>

  </div>
</template>

<script>



export default {

    name: 'book-details',
       

    props: {
        book: Object,
    }


}
</script>

<style>

</style>