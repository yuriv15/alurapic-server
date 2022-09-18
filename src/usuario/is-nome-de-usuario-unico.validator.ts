import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioService } from './usuario.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint()
export class IsNomeDeUsuarioUnicoConstraint
    implements ValidatorConstraintInterface
{
    constructor(private usuarioService: UsuarioService) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validate(nomeDeUsuario: string, validationArguments?: ValidationArguments) {
        return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
    }
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNomeDeUsuarioUnicoConstraint,
        });
    };
}
