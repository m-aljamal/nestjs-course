import { IsString } from 'class-validator';
export class CreateMessageDto {
  @IsString() // make sure the content is string
  content: string;
}
