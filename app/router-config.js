import { AccountController } from "./controllers/AccountController.js";
import { PokeDexController } from "./controllers/PokeDexController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PokeDexController],
    view: 'app/views/PokeDexView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




