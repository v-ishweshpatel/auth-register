/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
//import { AuthController } from 'src/auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/strategy/constants';
import { UserService } from 'src/users/users.service';
import { HashService } from 'src/users/hash.service';
import { LocalStrategy } from 'src/strategy/local.strategy';
import AuthController from './auth.controller';

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
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, HashService],
})
export class AuthModule {}