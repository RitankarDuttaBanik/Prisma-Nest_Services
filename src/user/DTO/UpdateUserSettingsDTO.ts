import { IsBoolean, IsOptional } from "class-validator";

export class UpdateUserSettingsDTO {

    @IsOptional()
    @IsBoolean()
    snsenabled?: boolean;

    @IsOptional()
    @IsBoolean()
    notifications?: boolean;
}