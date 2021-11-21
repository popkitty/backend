import { IsNumber, IsString } from 'class-validator'

export class AddPopDto {
  @IsString()
  guild: string

  @IsNumber()
  count = 1
}
