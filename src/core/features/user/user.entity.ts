import { randomUUID } from 'crypto'

export class User {
  id: string
  constructor(readonly email: string) {
    this.id = randomUUID()
  }
}