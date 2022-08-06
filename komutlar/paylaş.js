
const Discord = require('discord.js');
const db = require('croxydb');
module.exports = {
    name: 'paylaş',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
let kanal = db.get(`kanal_${message.guild.id}`)
let log = db.get(`log_${message.guild.id}`)
let baslik = args[0]
let link = args[1]
let aciklama = args.slice(2).join(" ")
if (!log) return message.channel.send("Log kanalı ayarlı olmadığı için paylaşım yapamazsın.")
if (!kanal) return message.channel.send("Başvuru kanalı ayarlanmadığı için paylaşım yapamazsın.")
if (!baslik) return message.channel.send("Paylaşım başlığını girin!")
if (!link) return message.channel.send("Paylaşım resmini girin!")
if (!aciklama) return message.channel.send("Bir açıklama girin!")

            const embed = new Discord.MessageEmbed()
            .setTitle("Yeni Bir Paylaşım Geldi!")
            .setDescription(`
            Paylaşan: <@${message.author.id}>\nBaşlık: ${baslik}\nAçıklama: ${aciklama} `)
            .setImage(`${link}`)
            .setThumbnail("https://cdn.discordapp.com/attachments/1005425100906041404/1005530861766193332/unknown.png")
            
      const row = new Discord.MessageActionRow()
      .addComponents(
new Discord.MessageButton()
.setLabel("Gönder")
.setStyle("SUCCESS")
.setCustomId("gonder"),
new Discord.MessageButton()
.setLabel("Gönderme")
.setStyle("DANGER")
.setCustomId("gonderme")
        
      )
      const embed2 = new Discord.MessageEmbed()
      .setTitle("Yeni Bir Paylaşım Geldi!")
      .setDescription(`
      Paylaşan: <@${message.author.id}>\nBaşlık: ${baslik}\nAçıklama: ${aciklama} `)
      .setThumbnail("https://cdn.discordapp.com/attachments/1005425100906041404/1005530861766193332/unknown.png")
     
      .setImage(`${link}`)
      let log2 = db.get(`log_${message.guild.id}`)
       
      message.delete()
client.channels.cache.get(log2).send({embeds: [embed], components: [row]}).then(radio => {
                radio.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
                  let interaction = button
                    if (interaction.customId == "gonder") {
radio.delete()
message.author.send("Başvurun yetkililer tarafından onaylandı ve paylaşıldı.").catch(err => console.log(`<@${message.author.id}> kullanıcısının başvurusu reddedilmiştir.`) ? console.log("Bi üyenin Dm kapalı!") :  null)
client.channels.cache.get(kanal).send({embeds: [embed2]})
                    }
                    if (interaction.customId == "gonderme") {
radio.delete()
message.author.send("Paylaşımın Yetkililer Tarafından Reddedilmiştir.").catch(err => client.channels.cache.get(kanal).send(`<@${message.author.id}> kullanıcısının başvurusu reddedilmiştir.`) ? console.log("Bi üyenin Dm kapalı!") :  null)
                    }
                })
        })
  }
    }

