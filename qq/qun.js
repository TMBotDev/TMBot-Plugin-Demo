"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Run = void 0;
const app_1 = require("../app");
function sleep(t) {
    return new Promise(r => setTimeout(r, t));
}
async function Run(bot) {
    await sleep(3000);
    let iter = bot.Groups.entries(), now = iter.next();
    while (!now.done) {
        let v = now.value[1];
        app_1.logger.info("群号: " + v.group_id, "拥有者: ", v.Owner?.user_id);
        let ess = await bot.getEssenceMsgList(v.group_id);
        app_1.logger.info("精华消息:", JSON.stringify(ess.data, null, 2));
        now = iter.next();
    }
}
exports.Run = Run;
