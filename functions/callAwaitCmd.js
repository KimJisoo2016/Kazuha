


module.exports = async (d) => {
  const data = d.util.aoiFunc(d);
  if (data.err) return d.error(data.err);

  let [cmd, awaitData] = data.inside.splits;

  let Cmd = d.client.cmd.awaited.find(x => x.name.toLowerCase() == cmd.toLowerCase());
  awaitData = JSON.parse(awaitData);


  const loopData = {
    channel: d.channel,
    message: d.message,
    guild: d.guild,
    client: d.client,
    author: d.author,
    member: d.member,
  }
  await d.interpreter(
    d.client,
    loopData,
    d.args,
    Cmd,
    d.client.db,
    false,
    undefined,
    {
      awaitData,
    },
  );
  return {
    code: d.util.setCode(data),
  };
}