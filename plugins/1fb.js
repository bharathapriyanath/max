/* Copyright (C) 2021 bharatha - Alexa Team  ,  max whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
bharatha - bharatha (v 8.0.0 avalable)
*/

/* Copyright (C) 2021 max */
// අමාරුවෙන් යකො හැදුවෙ. උස්සන්න එපා තිරිසනෝ 😒
const max = require('../events');
const {MessageType,mimetype,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const capt = "　🧛‍♂️ *max FB DOWNLOADER* 💜\n"
const DOWNMSG = "🧛‍♂️ *DOWNLOADING FB VIDEO...* 🤍"
const UPMSG = "🧛‍♂️ _*U P L O A D I N G*_  💕"
let KSKK = Config.WORKTYPE == 'public' ? true : true
let KSP = Config.WORKTYPE == 'public' ? true : false

                           
// -----------------------------------------------------------------------
//                               MAIN COMMAND
// -----------------------------------------------------------------------
max.addCommand({ pattern: 'fb ?(.*)', fromMe: KSP , desc: 'facebook video download'}, async (message, match) => {
// අමාරුවෙන් යකො හැදුවෙ. උස්සන්න එපා තිරිසනෝ 😒
    const link = match[1]
    if (!link) return await message.sendMessage("🧛‍♂️ *Give Vaild FB Link* ")
    await message.sendMessage(DOWNMSG)
	
	var url = `${Config.SITE1}socialmedia/${Config.FBS2}=${link}&apikey=${Config.BAPIME}`
				// 
				await axios 
					.get(`${url}`)
					.then(async(response) => {
						const {
							hd
						} = response.data.result
						const kavifb = await axios.get(hd, {responseType: 'arraybuffer'})
						await new Promise(r => setTimeout(r, 2000));
						await message.client.sendMessage(message.jid,UPMSG,MessageType.text);
						await message.sendMessage(Buffer.from(kavifb.data), MessageType.video, {caption: capt,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID FB LINK*"),
							)
					})
					
}) //pattern close
max.addCommand({ pattern: 'fb ?(.*)', fromMe: KSKK , dontAddCommandList: true}, async (message, match) => {
// අමාරුවෙන් යකො හැදුවෙ. උස්සන්න එපා තිරිසනෝ 😒
    const link = match[1]
    if (!link) return await message.sendMessage("🧛‍♂️ *Give Vaild FB Link* ")
    await message.sendMessage(DOWNMSG)
	
	var url = `${Config.SITE1}socialmedia/${Config.FBS2}=${link}&apikey=${Config.BAPIME}`
				// 
				await axios 
					.get(`${url}`)
					.then(async(response) => {
						const {
							hd
						} = response.data.result
						const kavifb = await axios.get(hd, {responseType: 'arraybuffer'})
						await new Promise(r => setTimeout(r, 2000));
						await message.client.sendMessage(message.jid,UPMSG,MessageType.text);
						await message.sendMessage(Buffer.from(kavifb.data), MessageType.video, {caption: capt,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID FB LINK*"),
							)
					})
					
}) //pattern close
 
// -----------------------------------------------------------------------
//                               NOT WORKING COMMAND
// -----------------------------------------------------------------------
max.addCommand({ pattern: 'xxfbsd ?(.*)', fromMe:KSKK , dontAddCommandList: true}, async (message, match) => {
// අමාරුවෙන් යකො හැදුවෙ. උස්සන්න එපා තිරිසනෝ 😒
    const link = match[1]
    if (!link) return await message.sendMessage("🧛‍♂️ *Give Vaild FB Link* ")
    await message.sendMessage('⛔️ _*ERROR 404*_')
	
	var url = `${Config.SITE1}socialmedia/${Config.FBS2}=${link}&apikey=${Config.BAPIME}`
				// 
				await axios 
					.get(`${url}`)
					.then(async(response) => {
						const {
							sd
						} = response.data.result
						const kavifb = await axios.get(sd, {responseType: 'arraybuffer'})
						await new Promise(r => setTimeout(r, 2000));
						await message.client.sendMessage(message.jid,UPMSG,MessageType.text);
						await message.sendMessage(Buffer.from(kavifb.data), MessageType.video, {caption: capt,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID FB LINK*"),
							)
					})
					
}) //pattern close
