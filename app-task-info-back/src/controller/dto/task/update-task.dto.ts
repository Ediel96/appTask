import { IsNumber, Min, IsOptional, IsString, IsDate } from "class-validator";

export class UpdateTaskDto {

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsDate()
    dateCreate: Date;

    @IsDate()
    dateUpdate: Date;

}