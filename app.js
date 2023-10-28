const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'LOTR', author: 'Tolkien', img: 'assets/lotr.jpeg', isFav: true },
        { title: 'Harry Potter', author: 'Rowling', img: 'assets/harry-potter.jpeg', isFav: false },
        { title: 'GoT', author: 'Martin', img: 'assets/got.jpeg', isFav: false },
      ]
    }
  },
  computed: {
    favBooks() {
      return this.books.filter(book => book.isFav)
    }
  },
  methods: {
    toggleShowBooks() { this.showBooks = !this.showBooks },
    toggleFav(book) { book.isFav = !book.isFav }
  },
})

app.mount('#app')
