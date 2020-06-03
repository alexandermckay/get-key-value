/**
 *
 * If you have an interface like this:
 *
 * `interface User { name: string; age: number; }`
 *
 * That describes an the shape of an object
 *
 * `const user: User = { name: "John Smith", age: 20 }`
 *
 * You can use getKeyValue like this:
 *
 * `const getUserName = getKeyValue<keyof User, User>("name", user)`
 *
 * Or like this:
 *
 * `const getUserName = getKeyValue<keyof typeof user, typeof user>("name", user)`
 * */

export const getKeyValue = <U extends keyof T, T extends object>(
  key: U,
  obj: T
) => obj[key]
