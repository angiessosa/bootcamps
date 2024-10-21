import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entidades/student';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //endpoint
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //endpoint 2
  @Get("/ejemplo")
  ejemplo(): string{
    return "ejemplo";
  }

  //endpoint con parametros
  @Get("identificacion/:id/nombre/:nombre")
  getIdentificacion(@Param("id") id:number, 
                    @Param("nombre") nombre:string, 
                    @Query("telefono") tel:number, 
                    @Query("edad") edad:number ): Student {
    return new Student(id, nombre, tel, edad)
    
    //`numero de identificacion: ${id}, nombre: ${nombre}, telefono: ${tel}, edad ${edad}`
  }
}
