import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  groups = 2

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  pokeIds = []
  pokemon = []

}

export const AppState = createObservableProxy(new ObservableAppState())