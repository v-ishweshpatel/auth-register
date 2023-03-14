/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://VishweshPatel:vishwesh@cluster0.nykqjcu.mongodb.net/?retryWrites=true&w=majority'),
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),
        // ...
      })
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
