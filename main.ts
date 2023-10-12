import * as oak from "https://deno.land/x/oak@v12.6.1/mod.ts";


const app = new oak.Application();

app.use(async (ctx: oak.Context) => {
  await ctx.cookies.set("foo", "somevalue", {
    httpOnly: true,
    secure: true,

    // This must be true since the secure connection is on the deno deploy entrypoint, but not to the web app itself.
    ignoreInsecure: true,
  });
  ctx.response.status = 204
})

await app.listen();
