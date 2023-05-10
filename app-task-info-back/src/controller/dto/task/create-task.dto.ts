import { IsNumber, Min, IsOptional, IsString, IsDate } from "class-validator";

export class CreateTaskDto {

    @IsOptional()
    @Min(1)
    @IsNumber()
    id?:string;

    @IsString()
    description : string;

    @IsString()
    name: string;

    @IsDate()
    dateCreate: Date;

    @IsDate()
    dateUpdate: Date;

}