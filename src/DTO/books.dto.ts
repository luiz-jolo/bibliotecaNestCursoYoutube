import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsNumber, IsPositive, IsString, MaxLength, Min, MinLength, ValidateNested } from "class-validator";
import { AuthorDTO } from "./author.dto";
import { Type } from 'class-transformer';

export class BookDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(150)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    readonly language: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly releaseYear: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(150)
    readonly publisher: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly page: number;
    
    @IsNotEmpty()
    @Type(() => AuthorDTO)
    @ArrayMinSize(1)
    @ValidateNested({each: true})
    readonly author: AuthorDTO[];
    
}