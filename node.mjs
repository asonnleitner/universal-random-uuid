import { randomUUID as uuid } from "node:crypto"
export const randomUUID = () => globalThis?.crypto?.randomUUID?.() ?? uuid()
