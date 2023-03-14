/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import AuthController from 'src/auth/auth.controller';
import EmailSchedulingService from 'src/email/emailSchedule.service';
import EmailScheduleDto from 'src/dto/emailSchedule.dto';
 
@Controller('email-scheduling')
export default class EmailSchedulingController {
  constructor(
    private readonly emailSchedulingService: EmailSchedulingService
  ) {}
  @Post('schedule')
  @UseGuards(AuthController)
  async scheduleEmail(@Body() emailSchedule: EmailScheduleDto) {
    this.emailSchedulingService.scheduleEmail(emailSchedule);
  }
}