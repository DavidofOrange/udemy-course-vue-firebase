const app = Vue.createApp({
    data() {
        return {
            showContents: true,
            title: "Cloud Strife",
            num: 0,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowContent() {
            this.showContents = !this.showContents
        },
        handleEvent() {
            console.log('event')
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})
app.mount("#app");