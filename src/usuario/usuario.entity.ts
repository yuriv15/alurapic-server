import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico.validator';

export class Usuario {
    id: number;

    @IsNomeDeUsuarioUnico({
        message: 'Nome de usuário precisa ser único.',
    })
    @IsNotEmpty({
        message: 'Nome de usuário é obrigatório.',
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser uma string.',
    })
    nomeDeUsuario: string;

    @IsEmail({
        message: 'Email inválido.',
    })
    email: string;

    @IsNotEmpty({
        message: 'Senha é obrigatória.',
    })
    senha: string;

    @IsNotEmpty({
        message: 'Nome completo é obrigatório.',
    })
    nomeCompleto: string;

    dataDeEntrada: Date;
}
