import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AnswersModule } from './answers/answers.module';
import { ThemeStepsModule } from './theme-steps/theme-steps.module';
import { ThemesModule } from './themes/themes.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot(),
    AnswersModule,
    ThemeStepsModule,
    ThemesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
