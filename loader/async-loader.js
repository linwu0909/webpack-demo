const sleep = num => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, num)
})

module.exports = function (source) {
    const callback = this.async();
    (async () => {
        await sleep(1000)
        source = source.replace(/var/g, 'const')
        callback(null, source) // 第一个参数是err，第二个是返回的变更后的数据
    })()
}