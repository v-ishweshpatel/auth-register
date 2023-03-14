/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/strategy/constants';
import { HashService } from './hash.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { LocalStrategy } from 'src/strategy/local.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{
        name: User.name,
        schema: UserSchema
      }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '30d'
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, HashService, AuthService, JwtStrategy, LocalStrategy],
})
export class UserModule {}