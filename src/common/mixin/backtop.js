export const backTOP = {
    data() {
        return {
            backTopShow: false
        }
    },
    methods: {
        scrollPosition(position) {
            if (position.y < (-1200)) {
                this.backTopShow = true
            } else {
                this.backTopShow = false
            }
        },
        scrollTo() {
            this.$refs.btscroll.scrollTo(0, 0, 500)
        }
    }
}