import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('users')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(
        @Param('nomeDeUsuario') nomeDeUsuario: string,
    ) {
        return this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        return this.usuarioService.cria(usuario);
    }
}
