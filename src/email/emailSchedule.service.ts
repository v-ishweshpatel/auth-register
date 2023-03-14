/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import EmailService from 'src/email/emailSchedule.service';
import EmailScheduleDto from 'src/dto/emailSchedule.dto';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export default class EmailSchedulingService {
  sendMail: any;
  constructor(
    private readonly emailService: EmailService,
    private readonly schedulerRegistry: SchedulerRegistry
  ) {}

  scheduleEmail(emailSchedule: EmailScheduleDto) {
    const date = new Date(emailSchedule.date);
    const job = new CronJob(date, () => {
      this.emailService.sendMail({
        to: emailSchedule.recipient,
        subject: emailSchedule.subject,
        text: emailSchedule.content
      })
    });
    this.schedulerRegistry.addCronJob(`${Date.now()}-${emailSchedule.subject}`, job);
    job.start();
cancelAllScheduledEmails() 
{
      this.schedulerRegistry.getCronJobs().forEach((job) => {
        job.stop();
      })
    }
  }
}

function cancelAllScheduledEmails() {
  throw new Error('Function not implemented.');
}
