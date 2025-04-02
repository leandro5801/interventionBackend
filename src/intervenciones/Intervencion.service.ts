import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Intervencion } from './intervencion.entity';
import { Repository } from 'typeorm';
import { IntervencionDto } from './dto/intervencion.dto';
import { ChargeInterventionDto } from './dto/ChargeInterventionDto';
import axios from 'axios';
import { Periodo } from './periodo.entity';

@Injectable()
export class IntervencionService {
  constructor(
    @InjectRepository(Intervencion)
    private readonly intervencionRepository: Repository<Intervencion>,
  ) {}

  async createIntervencion(createIntervencion: IntervencionDto) {
    console.log(createIntervencion);

    const intervencion = this.intervencionRepository.create(createIntervencion);
    await this.intervencionRepository.save(intervencion);
    return intervencion;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  async findAllIntervencion() /* : Promise<Intervencion[]> */ {
    const intervenciones = await this.intervencionRepository.find({
      relations: ['periodos'],
    });
    console.log(intervenciones);
    return intervenciones;
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findIntervencionById(id_intervencion: number): Promise<Intervencion> {
    return this.intervencionRepository.findOneBy({ id_intervencion });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  async updateIntervencion(
    id_intervencion: number,
    IntervencionDto: IntervencionDto,
  ) {
    // Prepara los periodos con sus IDs
    const periodosConId = IntervencionDto.periodos?.map((periodo) => ({
      ...periodo,
      id: periodo.id || undefined,
    }));

    // Preload de la intervención
    const intervencionPreload = await this.intervencionRepository.preload({
      id_intervencion,
      ...IntervencionDto,
      periodos: periodosConId,
    });

    if (!intervencionPreload) {
      throw new NotFoundException(
        `Intervención con ID ${id_intervencion} no encontrada.`,
      );
    }

    // Guarda la intervención y los periodos relacionados
    const intervencionActualizada = await this.intervencionRepository.save(
      intervencionPreload,
    );
    return intervencionActualizada;
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async delete(id_intervencion: number) {
    return this.intervencionRepository.delete(id_intervencion);
  }

  async fetchInterventionsFromApi(
    chargeInterventionDto: ChargeInterventionDto,
  ) {
    const { id_proyecto, nombre_proyecto } = chargeInterventionDto;
    console.log(id_proyecto);
    console.log(nombre_proyecto);

    let data: [];
    let processedData: {
      id_intervencion?: number;
      id_proyecto: number;
      nombre_intervencion: string;
      cargar_intervencion: boolean;
      periodos: Periodo[];
    }[] = [];
    try {
      const response = await axios.get(
        'http://localhost:3005/projects/projects.json',
      );

      data = response.data['proyectos'];
    } catch (error) {}
    for (const object of data) {
      console.log(object);

      if (object['nombre'] === nombre_proyecto) {
        const interventions: {
          nombre: string;
          periodo: [{ start_date: Date; end_date: Date }];
        }[] = object['intervenciones'];
        console.log(interventions);

        for (const intervention of interventions) {
          const existentIntervention =
            await this.intervencionRepository.findOne({
              where: {
                id_proyecto: id_proyecto,
                nombre_intervencion: intervention.nombre,
                periodos: {
                  start_date: intervention.periodo[0].start_date,
                  end_date: intervention.periodo[0].end_date,
                },
              },
            });
          console.log(existentIntervention);

          if (!existentIntervention) {
            {
              await this.intervencionRepository.save({
                id_intervencion: undefined,
                id_proyecto: id_proyecto,
                nombre_intervencion: intervention.nombre,
                cargar_intervencion: true,
                periodos: intervention.periodo.map((periodo) => {
                  let intervalo = new Periodo();
                  intervalo.start_date = periodo.start_date;
                  intervalo.end_date = periodo.end_date;
                  console.log(intervalo);

                  return intervalo;
                }),
              });
            }
          }
        }

        return this.intervencionRepository.find({
          where: { cargar_intervencion: true },
        });
      }
    }
  }
}
