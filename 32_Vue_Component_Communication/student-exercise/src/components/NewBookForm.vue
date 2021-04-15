<template>
    <form class="new-book-form" v-on:submit.prevent="addNewBook" >
        <div>
            <label for="title">Title</label>
            <input class="title-input" type="text" v-model="book.title" />
        </div>

        <div>
            <label for="author">Author</label>
            <input class="author-input" type="text" v-model="book.author" />
        </div>

        <div>
             <label for="isbn">ISBN</label>
             <input class="isbn-input" type="text" v-model="book.isbn" />


                <button> addNewBook </button>
        </div>
    </form>
</template>

<script>
export default {

    name: "new-book-form",

    data() {
        return {
            book: {
            title: "",
            author: "",
            read: false,
            isbn: ""
            }
        }
    },

    methods: {

        addNewBook() {
            this.$store.commit("ADD_NEW_BOOK", this.book);
            this.book = {
                 title: "",
                 author: "",
                 read: false,
                 isbn: ""
            };

            }

        }
    }


</script>

<style>

</style>