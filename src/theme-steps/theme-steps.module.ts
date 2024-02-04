import { Module } from '@nestjs/common';
import { ThemeStepsService } from './theme-steps.service';
import { ThemeStepsController } from './theme-steps.controller';

@Module({
  controllers: [ThemeStepsController],
  providers: [ThemeStepsService],
})
export class ThemeStepsModule {}
