// ==UserScript==
// @name        b站显示直播间分区
// @namespace   Violentmonkey Scripts
// @supportURL  https://space.bilibili.com/35192025
// @grant       none
// @version     1.01
// @author      铂屑
// @license     MIT
// @include     /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @require     https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @grant       none
// @icon        https://www.google.com/s2/favicons?domain=bilibili.com
// @description 显示直播间所在分区并提供链接
// ==/UserScript==

(async function() {
    'use strict';

    while ($('#head-info-vm .lower-row .live-area').children().length == 0){
      console.warn(`找不到分区元素，等待3秒。`)
      await new Promise((res,) => setTimeout(res, 3000)) // wait 3 seconds
    }

    for (const element of $('#head-info-vm .lower-row .live-area').children()){
        console.log(element.innerText)
    }

    try {
        $('#head-info-vm .lower-row .live-area').css('display', 'flex')
    }catch(err){
        console.warn(`显示分区时出现错误: ${err}`)
        console.warn(err)
    }
})().catch(console.warn);
