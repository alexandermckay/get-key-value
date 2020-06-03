import {getKeyValue} from './index'

test('getKeyValue should index an object', () => {
  const username = 'BuffaloBob'
  const user = {username}
  const result = getKeyValue<keyof typeof user, typeof user>(
    'username',
    user
  )
  expect(result).toBe(username)
})
