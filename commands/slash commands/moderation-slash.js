module.exports = [{
name: "log-channel-set",
type: "interaction",
prototype: "slash",
code:`$setGuildVar[log;$slashOption[channel]]
$interactionReply[<#$slashOption[channel]> set as log channel!]
$onlyPerms[administrator;You must have the \`administrator\` permission to use this command!]`
},{
    name: "update-commands",
    type: "interaction",
  prototype: "slash",
    code: `$updateCommands
    $interactionReply[;{newEmbed:{description: all commands have been successfully updated!}{color: #2c2d31}}]
    $onlyPerms[administrator;You must have the \`administrator\` permission to use this command!]
`
},{
  name: "invite",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[**Invite me here:** $getClientInvite[administrator];;;;users;true]
  `
},{
  name: "ping",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title: Pong!}{description: $ping ms}{color: #2c2d31}}]
  `
}]