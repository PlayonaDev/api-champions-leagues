import createApp from "./app";

const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`
        🏆 𝗔𝗣𝗜-𝗖𝗛𝗔𝗠𝗣𝗜𝗢𝗡𝗦 𝗟𝗘𝗔𝗚𝗨𝗘 🏆 \n
        ✅ Server running at port -> http://localhost:${port}`);
});
