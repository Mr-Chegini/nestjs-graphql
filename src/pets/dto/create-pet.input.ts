import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha()
  @Field()
  name: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  type?: string;
}
