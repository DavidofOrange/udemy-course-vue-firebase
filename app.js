const app = Vue.createApp({
    data() {
        return {
            showContents: true,
            games: [
                { title: "Final Fantasy 7", company: "Square Soft" },
                { title: "Breath of the wild", company: "Nintendo" },
                { title: "Witcher 3", company: "CD Red Project" }
            ]
        }
    },
    methods: {
        toggleShowContent() {
            this.showContents = !this.showContents
        }
    }
})
app.mount("#app");