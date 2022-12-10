import { BotDockingMgr } from "../../modules/BotDockingMgr";
import { Logger } from "../../tools/logger";


let logger = new Logger("Test");

function onLoad() {
    let allBot = BotDockingMgr.getBotMapIters();
    let iter = allBot.next();
    while (!iter.done) {
        let d = iter.value[1];
        let id = d.events.onInitSuccess.on(() => {
            //必须在初始化完成后才能获取登录号信息
            logger.warn(`名称： ${d.Name}, 登录号： ${d.LoginInfo.user_id}`);
            d.events.onInitSuccess.un(id);//删除此监听器
        });
        iter = allBot.next();
    }
}

onLoad();