const Discord = require('discord.js')

exports.run = async (bot, member) => {
    const guild = member.guild
    const ch = await bot.channels.fetch('623165984135446558')
    const invites = await guild.fetchInvites()

    let totalJoins = 0

    invites.forEach(invite => {
        totalJoins += invite.uses
    })

    const embed = new Discord.MessageEmbed()
        .setAuthor(member.user.username, member.user.avatarURL())
        .setColor('#2f3136')
        .setTitle(`✨  Welcome to ${guild.name}, ${member.user.username}`)
        .addField('💫  Members', `${guild.memberCount}`, true)
        .addField('🏆  Total Joins', `${totalJoins}`, true)
    ch.send(embed)
}