import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
𝒁𝑰𝑫𝑰 🕊⋆❤𝑵𝑨𝑾𝑨𝑩
https://chat.whatsapp.com/Ds8Zc29apIvHSFNByv8SEO
𝒁𝑰𝑫𝑰 🕊⋆❤𝑵𝑨𝑾𝑨𝑩
`
let pp = '𝒁𝑰𝑫𝑰 🕊⋆❤𝑵𝑨𝑾𝑨𝑩' 
conn.sendButton(m.chat, m2, pp, [
  ['⏍ Info', `${usedPrefix}botinfo`],
  ['⌬ Groups', `${usedPrefix}gpguru`]
],m, rpyt)

}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['script', 'sc', 'repo'] 

export default handler
