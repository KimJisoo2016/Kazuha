
module.exports = [{
name: "help",
  
type: "interaction",
prototype: "slash",
code: `$interactionReply[;{newEmbed:{title:$username[$clientID]’s Menu Panel}{description:
All commands both have a prefix and slash!
Global Prefix - ! & /
Guild Prefix - $getGuildVar[prefix] & /


}{thumbnail:$userAvatar[$clientID]}{color:#2c2d31}{footer:page 1 / 3};
{actionRow:
{selectMenu:Menu:my commands:1:1:false:{selectMenuOptions:Home page :Menu1::false}
{selectMenuOptions:Fun page:Menu2::false}
{selectMenuOptions:Moderation page:Menu3::false}

]
`},{
name: "Menu",
type: "interaction",
prototype: "selectMenu",
$if: "old",
code:`

$if[$message==Menu1]
$interactionUpdate[;{newEmbed:{title:$username[$clientID]’s Menu Panel}{description:
All commands both have a prefix and slash!
Global Prefix - ! & /
Guild Prefix - $getGuildVar[prefix] & /


}{thumbnail:$userAvatar[$clientID]}{color:#2c2d31}{footer:page 1 / 3};{actionRow:
{selectMenu:Menu:my commands:1:1:false:{selectMenuOptions:Home page :Menu1::false}
{selectMenuOptions:Fun page:Menu2::false}
{selectMenuOptions:Moderation page:Menu3::false}}}]

$elseif[$message==Menu2]

$interactionUpdate[;{newEmbed:
{title:Help - Fun}{description:
- hello_kazuha - sends an embed with info about Kazuha
- hug - get a hug from Kazuha
- kiss - get a kiss from Kazuha
- sing - sing with Kazuha}{color:#2c2d31}{footer:page 2 / 3}};
{actionRow:
{selectMenu:Menu:my commands:1:1:false:{selectMenuOptions:Home page :Menu1::false}
{selectMenuOptions:Fun page:Menu2::false}
{selectMenuOptions:Moderation page:Menu3::false}}
]
$endElseIf
$elseIf[$message==Menu3]

$interactionUpdate[;{newEmbed:
{title:Help - Moderation}
{description:
- log_channel_set - set the logging channel (admin only)
- kick - kicks a user (requires kick permission)
- ban - bans a user (requires ban permission)
- unban - unbans a user (requires ban permission)
- invite - gives you the link to invite to your server
- ping - return the latency of the bot}{color:#2c2d31}{footer:page 3 / 3};{actionRow:
{selectMenu:Menu:my commands:1:1:false:{selectMenuOptions:Home page :Menu1::false}
{selectMenuOptions:Fun page:Menu2::false}
{selectMenuOptions:Moderation page:Menu3::false}}}}]

$endElseIf
$endif

`}]
