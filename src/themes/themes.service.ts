import { Injectable } from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ThemesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createThemeDto: CreateThemeDto) {
    return this.prismaService.theme.create({
      data: createThemeDto,
    });
  }

  findAll() {
    return this.prismaService.theme.findMany({
      relationLoadStrategy: 'query',
      include: {
        themeSteps: {
          include: {
            answers: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.theme.findUnique({
      where: { id },
      relationLoadStrategy: 'query',
      include: {
        themeSteps: {
          include: {
            answers: true,
          },
        },
      },
    });
  }

  update(id: number, updateThemeDto: UpdateThemeDto) {
    return this.prismaService.theme.update({
      where: { id },
      data: updateThemeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.theme.delete({
      where: { id },
    });
  }
}
