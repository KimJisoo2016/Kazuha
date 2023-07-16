module.exports = [{
  name: "eval",
  code: `

$djsEval[const { ActionRowBuilder, ButtonBuilder, ButtonStyle,EmbedBuilder,codeBlock,ComponentType} = require('discord.js');
(async () => {
let m = (await d.interpreter(client,message,args,{ code: \`#CHAR#nonEscape\[\$\{args.join(" ")}\]\` },client.db,true))?.code+'',f = m?.match(/[\\s\\S]{1,4087}/g)||[" "], r=f.map((x,y)=>new EmbedBuilder().setColor(0x313236).setFooter({ text: \`Page \$\{y+1}/\$\{f.length} • \$\{m.length}\`}).setDescription(codeBlock("js", x)).setTitle("Evaluation Pages")), u=(a,b,c) => [new ActionRowBuilder().addComponents(new ButtonBuilder().setDisabled(a).setCustomId('back').setEmoji('◀️').setStyle(ButtonStyle.Secondary),new ButtonBuilder().setDisabled(b).setCustomId('delete').setEmoji('🗑').setStyle(ButtonStyle.Danger),new ButtonBuilder().setDisabled(c).setCustomId('next').setEmoji('▶️').setStyle(ButtonStyle.Secondary))], e=0,w = await message.channel.send({embeds: [r[e]],components: u(true,false,r.length<2)}), v = w.createMessageComponentCollector({ componentType: ComponentType.Button, time: 3e4});
v.on('collect', i => { i.deferUpdate(); if (i.user.id === message.author.id) { if(i.customId=="delete") { w.delete().catch(()=>{}) } else { e+=i.customId=="next"?1:-1; w.edit({embeds: [r[e]],components: u(e==0,false,!r[e+1]) }) } } else { i.reply({ content: \`These buttons aren't for you!\`, ephemeral: true }) } });
v.on('end', () => {w.edit({components: u(true,true,true)}).catch(()=>{})})
})()

;false]

$onlyForIDs[981845302900310097;
$clientOwnerIDs;]
`
}]