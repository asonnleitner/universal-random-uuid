const getExport = name => import("./node.mjs").then(m => m[name])
const createCaller = name => () => getExport(name).then(fn => fn())

exports.randomUUID = createCaller("randomUUID")
