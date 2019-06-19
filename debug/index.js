const Koa = require('../lib/application');
const app = new Koa();
app.use(async (ctx, next) => {
  if (ctx.url === '/favicon.ico') return false;
  ctx.body = '123';
  await next();
});
app.use(async (ctx, next) => {
  console.log(11111);
  await next();
});
app.listen(9090, () => {
  console.log('server is 9090');
});
