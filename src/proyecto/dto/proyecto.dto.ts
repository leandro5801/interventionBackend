export class proyectoDto {
  readonly id_proyecto?: number;
  readonly id_cliente: number;
  readonly nombre_proyecto: string;
  readonly objetivos: string;
  readonly tipo_proyecto: string;
  readonly cargar_proyecto: boolean;
  readonly consultores_asignados_id: number[];
}
