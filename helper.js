/* Copyright (C) 2021 KAVIYAAH - Alexa Team  ,  Lusifar whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 8.0.0 avalable)
*/

function successfullMessage(msg) {
    return "β *MAX*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *MAX*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *MAX*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
