export class IntervencionDto {
  readonly id_intervencion: number;
  readonly nombre_intervencion: string;
  readonly descripcion: string;
  readonly id_area: number;
  readonly id_trabajador: number;
  readonly id_proyecto: number;
  readonly id_consultor: number;
  readonly start_date: string;
  readonly end_date: string;
}
