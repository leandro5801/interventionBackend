import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AutenticacionService {
  //TENGO QUE USAR BCRYP para la contraseña
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}
  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usuarioService.findUsuarioByNombre(username);
    if (user?.contraseña !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async getProfile(token: string): Promise<any> {
    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.usuarioService.findUsuarionById(
        decoded.id_usuario,
      );
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (err) {
      throw new UnauthorizedException('Token inválido');
    }
  }
  async verifyToken(access_token: string): Promise<any> {
    try {
      const payload = this.jwtService.verify(access_token);
      return { isValid: true, payload };
    } catch (error) {
      return { isValid: false };
    }
  }
}
