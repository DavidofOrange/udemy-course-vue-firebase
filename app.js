const app = Vue.createApp({
    data() {
        return {
            showContents: true,
            title: "Cloud Strife",
            num: 0
        }
    },
    methods: {
        toggleShowContent() {
            this.showContents = !this.showContents
        }
    }
})
app.mount("#app");