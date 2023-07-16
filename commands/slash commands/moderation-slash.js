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
},{
  name: "ban",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[<@$slashOption[user]> succesfully banned!]
  
  $ban[$guildID;$slashOption[user];7;$slashOption[reason]]
  
  $channelSendMessage[$getGuildVar[log];{newEmbed:{title: Member Banned}
  {description: <@$slashOption[user]> has been banned
  Reason#COLON# $slashOption[reason]}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};false]
  
  $sendDM[{newEmbed:{title: Member Banned}
  {description: you have been banned from $guildName
  Reason#COLON# $slashOption[reason]}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};$slashOption[user];false]
  
$onlyIf[$checkCondition[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$slashOption[user]]]]!=false;{options:{ephemeral: true}}{extraOptions:{interaction:true}}{newEmbed:{description:I cannot ban someone with a higher role than mine.}{color:#000000}}]


  $onlyPerms[banmembers;You must have the \`ban members\` permission to use this command!]
  `
},{
  name: "unban",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[<@$slashOption[user]> succesfully unbanned!]
  
  $unban[$guildID;$slashOption[user]]
  
  $channelSendMessage[$getGuildVar[log];{newEmbed:{title: Member Unbanned}
  {description: <@$slashOption[user]> has been unbanned
  Reason#COLON# $slashOption[reason]}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};false]
  
    $onlyPerms[banmembers;You must have the \`ban members\` permission to use this command!]
    `
},{
  name: "warn",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[<@$slashOption[user]> succesfully warned!]

 $channelSendMessage[$getGuildVar[log];{newEmbed:{title: Member Warned}
  {description: <@$slashOption[user]> has been warned
  Reason#COLON# $slashOption[reason]
  They now have $getUserVar[warns;$slashOption[user];$guildID] warn(s)}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};false]
  
  $sendDM[{newEmbed:{title: Member Warned}
  {description: you have been warned in $guildName
  Reason#COLON# $slashOption[reason]
  You now have $getUserVar[warns;$slashOption[user];$guildID] warn(s)}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};$slashOption[user];false]

$setUserVar[warns;$sum[$getUserVar[warns;$slashOption[user];$guildID];1];$slashOption[user];$guildID]

  $onlyPerms[moderatemembers;You must have the \`moderate members\` permission to use this command!]
  `
},{
  name: "unwarn",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[<@$slashOption[user]> succesfully unwarned!]

 $channelSendMessage[$getGuildVar[log];{newEmbed:{title: Member Unwarned}
  {description: <@$slashOption[user]> has been unwarned
  Reason#COLON# $slashOption[reason]
  They now have $getUserVar[warns;$slashOption[user];$guildID] warn(s)}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};false]
  
  $sendDM[{newEmbed:{title: Member Unwarned}
  {description: you have been unwarned in $guildName
  Reason#COLON# $slashOption[reason]
  You now have $getUserVar[warns;$slashOption[user];$guildID] warn(s)}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};$slashOption[user];false]

  $setUserVar[warns;$sub[$getUserVar[warns;$slashOption[user];$guildID];1];$slashOption[user];$guildID]

  $onlyPerms[moderatemembers;You must have the \`moderate members\` permission to use this command!]
  `
},{
  name: "warns",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title: Member Warns}
  {description: <@$slashOption[user]> has $getUserVar[warns;$slashOption[user];$guildID] warn(s) }
  {color: #2c2d31}}]

  $onlyPerms[moderatemembers;You must have the \`moderate members\` permission to use this command!]
  `
},{
  name: "clear-warns",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title: Member Cleared Warns}
  {description: <@$slashOption[user]> has been cleared of all warn(s) and now has $getUserVar[warns;$slashOption[user];$guildID] warn(s) }
  {color: #2c2d31}}]

$setUserVar[warns;0;$slashOption[user];$guildID]

  $onlyPerms[moderatemembers;You must have the \`moderate members\` permission to use this command!]
  `
},{
  name: "kick",
  type: "interaction",
  prototype: "slash",
  code:`$interactionReply[<@$slashOption[user]> succesfully kicked!]
  
  $kick[$guildID;$slashOption[user];$slashOption[reason]]
  
  $channelSendMessage[$getGuildVar[log];{newEmbed:{title: Member Kicked}
  {description: <@$slashOption[user]> has been kicked
  Reason#COLON# $slashOption[reason]}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};false]
  
  $sendDM[{newEmbed:{title: Member Kicked}
  {description: you have been kicked from $guildName
  Reason#COLON# $slashOption[reason]}
  {author: $username[$slashOption[user]]:$userAvatar[$slashOption[user]]}
  {footer: ID#COLON# $slashOption[user]}
  {color: #2c2d31}
  {timestamp}};$slashOption[user];false]

   $onlyPerms[kickmembers;You must have the \`kick members\` permission to use this command!]
  `
},{
  name: "clear",
  prototype: "slash",
  type: "interaction",
  $if: "old",
  code: `
  $interactionFollowUp[You have deleted **$get[cAmount]** messages.]
  $let[cAmount;$clear[$get[clearAmount];$get[clearFilt];true;$get[clearChan]]]

  $if[$slashOption[channel]==]
    $let[clearChan;$channelID]
    $else
    $let[clearChan;$slashOption[channel]]
    $endIf

    $if[$slashOption[filter]==]
    $let[clearFilt;everyone]
    $else
    $let[clearFilt;$slashOption[filter]]
    $endIf

    $if[$slashOption[amount]>100]
    $let[clearAmount;100]
    $else
    $let[clearAmount;$slashOption[amount]]
    $endIf

    
    $interactionDefer[true]
    $onlyIf[$checkCondition[$channelType[$replaceText[$replaceText[$checkCondition[$slashOption[channel]==];true;$channelID];false;$slashOption[channel]]]==text]!=false;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:
  {author: Invalid Channel Type: https#COLON#//static.thenounproject.com/png/3688947-200.png}
  {description: The specified channel is invalid or not a text channel. Please provide a valid text channel.}
  {color: #000000}
}]

$onlyIf[$checkCondition[$hasAnyRole[$guildID;$authorID;$findRole[role]]==true||$hasPerms[$guildID;$authorID;managemessages]==true]!=false;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:
  {author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}
  {description:You do not have enough permission to perform this command.}
  {color:#000000}
}]
`
}]