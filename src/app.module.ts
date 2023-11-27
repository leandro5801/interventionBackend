import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { Module } from '@nestjs/common';
import { IntervencionModule } from './intervenciones/Intervencion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ConfigModule, ConfigService } from '@nestjs/config';
import { Intervencion } from './intervenciones/intervencion.entity';
import { recomendacionModule } from './recomendacion/recomendacion.module';
import { Trabajador } from './trabajador/trabajador.entity';
import { Ueb } from './ueb/ueb.entity';
import { Area } from './area/area.entity';
import { Direccion } from './direccion/direccion.entity';
import { Recomendacion } from './recomendacion/recomendacion.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { UebModule } from './ueb/ueb.module';
import { AreaModule } from './area/area.module';
import { DireccionModule } from './direccion/direccion.module';
import { Consultor } from './consultor/consultor.entity';
import { Empresa } from './empresa/empresa.entity';
import { ConsultorModule } from './consultor/consultor.module';
import { EmpresaModule } from './empresa/empresa.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/usuario.entity';
import { Proyecto } from './proyecto/proyecto.entity';
import { ProyectoModule } from './proyecto/proyecto.module';
import { RolModule } from './rol/rol.module';
import { Rol } from './rol/rol.entity';
import { Clasificacion } from './clasificacion/clasificacion.entity';
import { ClasificacionModule } from './clasificacion/clasificacion.module';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [
        Intervencion,
        Recomendacion,
        Clasificacion,
        Trabajador,
        Direccion,
        Ueb,
        Area,
        Consultor,
        Cliente,
        Empresa,
        Usuario,
        Rol,
        Proyecto,
      ],
      database: 'bdIntervencion',
      synchronize: true,
      logging: true,
    }),

    IntervencionModule,
    ClienteModule,
    UebModule,
    AreaModule,
    DireccionModule,
    TrabajadorModule,
    recomendacionModule,
    ClasificacionModule,
    ProyectoModule,
    ConsultorModule,
    EmpresaModule,
    AutenticacionModule,
    UsuarioModule,
    RolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, recomendacionModule, IntervencionesModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
       type: 'postgres', 
        host: 'localhost', // config.get('HOST'),
        port: 5432, // 5432 ...config.get<number>('PORT'),
        database: 'Integracion', // config.get('DATABASE'),
        username: 'postgres', // config.get('USERNAME'),
        password: 'admin', // config.get('PASSWORD'),
        entities: [Intervencion, Recomendacion],
        synchronize: true,
      }),
    }),
   IntervencionesModule, recomendacionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/
