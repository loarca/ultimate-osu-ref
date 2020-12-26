import { BanchoClient, BanchoUser } from 'bancho.js'

export interface AppState {
  client: BanchoClient | null
  users: BanchoUser[]
  // pms: BanchoChannel[]
  // lobbies: []
  // channels: BanchoChannel[]
}
