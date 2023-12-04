import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ueb } from './ueb.entity';
import { Repository } from 'typeorm';
import { uebDto } from './dto/ueb.dto';
import axios from 'axios';
import { EmpresaService } from '../empresa/empresa.service';

@Injectable()
export class UebService {
  constructor(
    @InjectRepository(Ueb) private readonly uebRepository: Repository<Ueb>,
    private empresaService: EmpresaService,
  ) {}

  async createUeb(createUeb: uebDto) {
    const ueb = this.uebRepository.create(createUeb);
    await this.uebRepository.save(ueb);
    return ueb;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllUeb(): Promise<Ueb[]> {
    return this.uebRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findUebById(idUeb: number): Promise<Ueb> {
    return this.uebRepository.findOneBy({ id_ueb: idUeb });
  }
  findUebByName(nombreUeb: string): Promise<Ueb> {
    return this.uebRepository.findOneBy({ nombre_ueb: nombreUeb });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateUeb(idUeb: number, UebDto: uebDto): Promise<Ueb> {
    const ueb: Ueb = new Ueb();
    ueb.id_ueb = idUeb;
    ueb.nombre_ueb = UebDto.nombre_ueb;
    ueb.id_empresa = UebDto.id_empresa;
    return this.uebRepository.save(ueb);
  }

  async deleteUeb(idUeb: number) {
    return this.uebRepository.delete(idUeb);
  }

  async fetchUebFromApi() {
    const response = await axios.get('http://localhost:3005/test/ueb');
    const data = response.data;
    const filteredData: { nombre_ueb: string; id_empresa: number }[] = [];
    for (const item of data) {
      const empresa = await this.empresaService.findEmpresaByName(item.entidad);
      if (empresa) {
        filteredData.push({
          nombre_ueb: item.nombre,
          id_empresa: empresa.id_empresa,
        });
      } else {
        console.log('NO hay empresa');
      }
    }
    await this.uebRepository.save(filteredData);
    return this.uebRepository.find();
  }
}
