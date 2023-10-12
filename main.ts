import * as oak from "https://deno.land/x/oak@v12.6.1/mod.ts";


const app = new oak.Application();

app.use(async (ctx: oak.Context) => {
  await ctx.cookies.set("foo", "somevalue", {
    httpOnly: true,
    secure: true,
    ignoreInsecure: false,
  });
  ctx.response.status = 204
})

await app.listen();
