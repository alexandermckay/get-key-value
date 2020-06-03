# Get Key Value

## Installation

`npm install get-key-value`
`yarn add get-key-value`

## Purpose

If you have been using Typescript you have likely stumbled into the `Element implicitly has an 'any' type because expression of type 'string' can't be used to index` error.

This tiny package makes it easy to deal with this error.

## Explanation of the Warning

```typescript
const user = {name: 'Bill'}

const getKeyValueA = (key: string, obj: object) => obj[key];
getKeyValueA('name', user) // Won't work

const getKeyValueB = (key: string, obj: Record<string, any>) => obj[key]
getKeyValue('name', user) // Will work but at the loss of type safety

const getKeyValue = <U extends keyof T, T extends object>(key: U, obj: T) => obj[key];
getKeyValue<keyof typeof user, typeof user>('name', user) // Will work with type safety
```

### getKeyValueA

- We set the `key` parameter to be type `string`
- We set the `obj` parameter to be type `object`
- The `object` type defaults to an empty object `{}` 
- The are no string in an empty object, therefore a string cannot be used to retrieve a value

### getKeyValueB

- We set the `key` parameter to be type `string`
- We set the `obj` parameter to be type `Record<string, any>`

```typescript
// Valid Record<string, any>
const user = {name: 'Bill', age: 20, likes: ['turtles', 'rock climbing']}
// Invalid Record<string, any>
const user = {1: 'Bill', 2: 20, 3: ['turtles', 'rock climbing']}
```

- Whilst this works, we lose typesafety as any `string` can be used to index an object and the type of the value will be `any`

### getKeyValue

- We set the `key` parameter to be the generic `U` which is a `keyof T`
- We set the `obj` parameter to be the generic `T` which `extends object`
- `T` extends an empty object and `U` extends the keys of `T`. Therefore `U` will always exist on `T` and can be used as a look up value.

## Usage

There are two ways to use the `getKeyValue` function:

### Option A

Use this option if you have a interface defined for your object

```typescript
interface User { name: string; age: number; }
const user: User = { name: "John Smith", age: 20 };
getKeyValue<keyof User, User>('name', user) // => 'John Smith'
```

### Option B

Use this option if you don't have an interface defined for your object

```typescript
const user = { name: "John Smith", age: 20 };
getKeyValue<keyof typeof user, user>('name', user) // => 'John Smith'
```
