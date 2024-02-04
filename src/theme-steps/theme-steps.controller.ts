import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ThemeStepsService } from './theme-steps.service';
import { CreateThemeStepDto } from './dto/create-theme-step.dto';
import { UpdateThemeStepDto } from './dto/update-theme-step.dto';

@Controller('theme-steps')
export class ThemeStepsController {
  constructor(private readonly themeStepsService: ThemeStepsService) {}

  @Post()
  create(@Body() createThemeStepDto: CreateThemeStepDto) {
    return this.themeStepsService.create(createThemeStepDto);
  }

  @Get()
  findAll(@Req() req: any) {
    const themeId: number = req.themeId;
    return this.themeStepsService.findAll(themeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.themeStepsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateThemeStepDto: UpdateThemeStepDto,
  ) {
    return this.themeStepsService.update(+id, updateThemeStepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.themeStepsService.remove(+id);
  }
}
