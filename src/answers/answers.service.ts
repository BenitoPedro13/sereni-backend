import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswersService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createAnswerDto: CreateAnswerDto) {
    return this.prismaService.answer.create({
      data: createAnswerDto,
    });
  }

  async findAll(themeStepId: number) {
    return this.prismaService.answer.findMany({
      where: {
        themeStepId,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.answer.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.prismaService.answer.update({
      where: { id },
      data: updateAnswerDto,
    });
  }

  remove(id: number) {
    return this.prismaService.answer.delete({
      where: { id },
    });
  }
}
