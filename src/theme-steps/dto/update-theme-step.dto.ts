import { PartialType } from '@nestjs/mapped-types';
import { CreateThemeStepDto } from './create-theme-step.dto';

export class UpdateThemeStepDto extends PartialType(CreateThemeStepDto) {}
