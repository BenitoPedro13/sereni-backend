import { Injectable } from '@nestjs/common';
import { CreateThemeStepDto } from './dto/create-theme-step.dto';
import { UpdateThemeStepDto } from './dto/update-theme-step.dto';

@Injectable()
export class ThemeStepsService {
  create(createThemeStepDto: CreateThemeStepDto) {
    return 'This action adds a new themeStep';
  }

  findAll() {
    return `This action returns all themeSteps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} themeStep`;
  }

  update(id: number, updateThemeStepDto: UpdateThemeStepDto) {
    return `This action updates a #${id} themeStep`;
  }

  remove(id: number) {
    return `This action removes a #${id} themeStep`;
  }
}
