export class UserAlreadyExists extends Error {
  constructor(readonly email: string, readonly message = 'user already exists', readonly statusCode = 400) {
    super(`${message}, ${email}`)
  }
}