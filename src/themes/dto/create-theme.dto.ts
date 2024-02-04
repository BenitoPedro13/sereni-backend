export class CreateThemeDto {
  name: string;
  slug: string;
  themeCardBg: string;
  initialThemeScreenBg: string;
  themeStepsIds?: number[];
}
