export default class Scroll {
    timer = null
    clearScroll() {
        clearInterval(this.timer)
        this.timer = null
    }
    scroll(tableBody) {
        let isScroll = true // 滚动
        const tableDom = tableBody.getElementsByClassName('el-scrollbar__wrap')[0]

        // 鼠标放上去，停止滚动；移开，继续滚动
        tableDom.addEventListener('mouseover', () => {
            isScroll = false
        })
        tableDom.addEventListener('mouseout', () => {
            isScroll = true
        })
        this.clearScroll()
        let i = 1
        this.timer = setInterval(() => {
            if (isScroll) {
                tableDom.scrollTop += i // 设置滚动速度
                // // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
                if (tableDom.clientHeight + tableDom.scrollTop >= tableDom.scrollHeight || tableDom.scrollTop == 0) {
                    i = (-i)
                }
            }
        }, 60)
    }
}
