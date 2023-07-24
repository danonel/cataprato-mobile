export class UserNotFound extends Error {
  constructor(readonly message = 'user not found', statusCode = 404) {
    super()
  }
}