// 导出模块
export { default as puppeteer } from "#yenai.puppeteer"
export { default as uploadRecord } from "../tools/uploadRecord.js"
export { default as Bika } from "./Bika.js"
export { default as common } from "../lib/common/common.js"
export { default as GroupAdmin } from "./GroupAdmin.js"
export { default as funApi } from "./api/funApi.js"
export { default as Pixiv } from "./Pixiv.js"
export { default as QQApi } from "./api/QQApi.js"
export { default as setu } from "./setu.js"
export { default as GroupBannedWords } from "./GroupBannedWords.js"
export { default as memes } from "./memes.js"
export const PicSearch = {
  async Ascii2D(...args) {
    const { default: Ascii2D } = await import("./PicSearch/ascii2d.js")
    return Ascii2D(...args)
  },
  async SauceNAO(...args) {
    const { default: SauceNAO } = await import("./PicSearch/saucenao.js")
    return SauceNAO(...args)
  },
  async WhatAnime(...args) {
    const { default: WhatAnime } = await import("./PicSearch/whatanime.js")
    return WhatAnime(...args)
  }
}
