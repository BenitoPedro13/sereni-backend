import { Injectable } from '@nestjs/common';
import { CreateThemeStepDto } from './dto/create-theme-step.dto';
import { UpdateThemeStepDto } from './dto/update-theme-step.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ThemeStepsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createThemeStepDto: CreateThemeStepDto) {
    return this.prismaService.themeStep.create({
      data: createThemeStepDto,
    });
  }

  findAll(themeId: number) {
    return this.prismaService.themeStep.findMany({
      where: {
        themeId,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.themeStep.findUnique({
      where: { id },
      relationLoadStrategy: 'query',
      include: {
        answers: true,
      },
    });
  }

  update(id: number, updateThemeStepDto: UpdateThemeStepDto) {
    return this.prismaService.themeStep.update({
      where: { id },
      data: updateThemeStepDto,
    });
  }

  remove(id: number) {
    return this.prismaService.themeStep.delete({
      where: { id },
    });
  }
}
