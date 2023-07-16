module.exports = [{
name: "hello-kazuha",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;{newEmbed:{title:Hello $slashOption[name]}{description:Hey, I'm Kazuha (카즈하 / 一葉 / カズハ)! Nice to meet you **$slashOption[name]!**

__**About Me:**__
- I'm a member of the girl group - LE SSERAFIM! 
- I'm from Japan (Born in Kochi and lived in Osaka from the ages 2 to 16)
- I'm 19 years old (born on August 9th 2003 - Leo) 
- My positions are Vocalist, Rapper, and Dancer
- My height is 170cm (5'7")
- My bias in BLACKPINK is Jisoo
- I speak Japanese, Korean and English
- I am very flexible and I have a habit of stretching frequently.}{color:2c2d31}}]`
},{
  name: "hug",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title:Kazuha hugged you!}{color: #2c2d31}{image:$randomText[https#COLON#//cdn.discordapp.com/attachments/1122169331179061369/1122169363471011921/bb816444d1296c5b2e20e31f462a93f8.jpg;https#COLON#//cdn.discordapp.com/attachments/1122169331179061369/1122186514395304046/eb9d4698a1253bd334d47d45c8a753e8.jpg;https#COLON#//cdn.discordapp.com/attachments/1122169331179061369/1122186508032561262/1f96c637239d18590f08df93ab97a81b.jpg]}}]`
},{
  name: "kiss",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title:Kazuha kissed you}!{color: #2c2d31}{image:https://cdn.discordapp.com/attachments/1122169331179061369/1122171856334618654/ezgif.com-crop_1.gif}}]`
},{
  name: "sing",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title:Of course we can sing together!}{color: #2c2d31}{description:$randomText[Boom, boom, boom
내 심장이 뛰네
Get it like
boom-boom-boom
Get it like 
boom-boom-boom
(Boom-boom now)~

[Eve, Psyche & The Bluebeard's wife](https://open.spotify.com/track/4QhnNyKDsAkXPwHkSnuc89?si=4a8e038e19bf4582);Unforgiven I'm a villain~

[Unforgiven](https://open.spotify.com/track/51vRumtqbkNW9wrKfESwfu?si=cc1f733c0aac4728);lovey lovey lovey, dovey dovey dovey~

[Antifragile](https://open.spotify.com/track/4fsQ0K37TOXa3hEQfjEic1?si=c8315bfe2d394c3f)]}}]
  `
}]