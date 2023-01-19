const getExport = name => import("./index.mjs").then(m => m[name])
const createCaller = name => () => getExport(name).then(fn => fn())

exports.randomUUID = createCaller("randomUUID")

