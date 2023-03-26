
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 69 MILLION FOLLOWERS ON MY INSTAGRAM`
let img = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg'
conn.sendHydrated2(m.chat, don, '▢ MAY LORD 𝒁𝑰𝑫𝑰 🕊⋆❤𝑵𝑨𝑾𝑨𝑩 BLESS YOUR DAY\n𝒁𝑰𝑫𝑰 🕊⋆❤𝑵𝑨𝑾𝑨𝑩\n▢ Subscribe  Youtube\n𝒁𝑰𝑫𝑰 🕊⋆❤𝑵𝑨𝑾𝑨𝑩\n', img,'𝒁𝑰𝑫𝑰 🕊⋆❤𝑵𝑨𝑾𝑨𝑩', 'Instagram', 'https://t.me/i_want_to_be_isekaied', 'TELEGRAM', [
    ], m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
