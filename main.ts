export {
  Application,
  Context,
  Next,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();

app.use(async (ctx: Context, next: Next) => {
  ctx.cookies.set("foo", "somevalue", {
    httpOnly: true,
    secure: true,
    ignoreInsecure: false,
  });
  ctx.response.status = 204
})

await app.listen();
