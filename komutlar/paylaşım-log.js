
const Discord = require('discord.js');
const db = require('croxydb');
module.exports = {
    name: 'log',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
    
        if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply({ content: " Bu Komutu Kullanmak İçin `Yönetici` Yetkisine İhtiyacım Var.", allowedMentions: { repliedUser: false } })
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        let log = message.mentions.channels.first()
        if(!log) return message.reply({content: "> Üzgünüm Bir Kanal Belirtmen Gerekiyor."})
        
        
        
     
        
       
          message.react("✅")
      
        db.set(`log_${message.guild.id}`, log.id)
}
}