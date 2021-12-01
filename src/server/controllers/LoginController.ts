import { Get, JsonController } from 'routing-controllers';

import LoginService from '../services/LoginService';
import Autowired from '../utils/decorator/autowired';

@JsonController('/login')
export default class LoginController {
  @Autowired
  private loginService: LoginService;

  @Get('/')
  public singIn(): Record<string, string> {
    return this.loginService.singIn();
  }
}
