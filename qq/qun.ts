import { OneBotDocking } from "../../../modules/OneBotDocking";
import { logger } from "../app";

function sleep(t: number) {
    return new Promise<void>(r => setTimeout(r, t));
}

export async function Run(bot: OneBotDocking) {
    await sleep(3000);
    let iter = bot.Groups.entries(), now = iter.next();
    while (!now.done) {
        let v = now.value[1];
        logger.info("群号: " + v.group_id, "拥有者: ", v.Owner?.user_id);
        let ess = await bot.getEssenceMsgList(v.group_id);
        logger.info("精华消息:", JSON.stringify(ess.data, null, 2));

        now = iter.next();
    }
}