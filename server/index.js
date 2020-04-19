const Koa = require('koa')
const app = new Koa()
//引入connect
const {connect} = require('./database/init.js')
//立即执行函数
;(async () =>{
    await connect()
})()
app.use(async(ctx) => {
    ctx.body = `<h2>hello koa2</h2>`
})
app.listen(3000,() => {
    console.log('app is running....')
})