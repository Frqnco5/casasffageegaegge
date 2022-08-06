
const Discord = require('discord.js');
const db = require('croxydb');
module.exports = {
    name: 'kanal',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
    
        if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply({ content: " Bu Komutu Kullanmak İçin `Yönetici` Yetkisine İhtiyacım Var.", allowedMentions: { repliedUser: false } })
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.reply({content: "> Üzgünüm Bir Kanal Belirtmen Gerekiyor."})
        
        
        
     
        
       
          message.react("✅")
      
        db.set(`kanal_${message.guild.id}`, kanal.id)
}
}