module.exports = async d =>{
  let data = d.util.aoiFunc(d);
let [id=d.author?.id]=data.inside.splits;

  data.result = ["910837428862984213","936557687687217193"].includes(id);

  return {
    code: d.util.setCode(data)
  }
}