import { Controller, Get, Param } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    @Get()
    getAllBootcamps(): string {
        return `aqui van a mostrarse todos los bootcamps`
    }

    @Get(":id")
    getBootcamp5(@Param("id") id:number) {
        return `bootcamp con id: ${id}`
    }
}
