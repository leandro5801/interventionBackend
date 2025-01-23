import { Test, TestingModule } from '@nestjs/testing';
import { SessionServices } from './sesion.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Session } from './sesion.entity';
import { Repository } from 'typeorm';
import { SessionDto } from './dto/sesion.dto';
import { NotFoundException } from '@nestjs/common';

describe('SessionServices', () => {
  let service: SessionServices;
  let repository: Repository<Session>;

  const mockSessionRepository = {
    findOne: jest.fn(),
    findOneBy: jest.fn(), // Agregar el método findOneBy
    save: jest.fn(),
    delete: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SessionServices,
        {
          provide: getRepositoryToken(Session),
          useValue: mockSessionRepository,
        },
      ],
    }).compile();

    service = module.get<SessionServices>(SessionServices);
    repository = module.get<Repository<Session>>(getRepositoryToken(Session));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('cambiarTema', () => {
    it('should update the theme with the provided values', async () => {
      const temaDto: SessionDto = { id: 1, isDark: true, font: 'Arial' };
      const existingTema = { id: 1, isDark: false, font: 'Times New Roman' };

      mockSessionRepository.findOne.mockResolvedValue(existingTema);
      mockSessionRepository.save.mockResolvedValue({
        ...existingTema,
        ...temaDto,
      });

      await service.cambiarTema(temaDto);

      expect(mockSessionRepository.findOne).toHaveBeenCalledWith({
        where: { id: temaDto.id },
      });
      expect(existingTema.isDark).toBe(temaDto.isDark);
      expect(existingTema.font).toBe(temaDto.font);
      expect(mockSessionRepository.save).toHaveBeenCalledWith(existingTema);
    });

    it('should throw NotFoundException when the theme does not exist', async () => {
      const temaDto: SessionDto = { id: 1, isDark: true, font: 'Arial' };

      mockSessionRepository.findOne.mockResolvedValue(null); // Simula que no se encuentra el tema

      await expect(service.cambiarTema(temaDto)).rejects.toThrow(
        NotFoundException,
      );
      await expect(service.cambiarTema(temaDto)).rejects.toThrow(
        `Session dont exist`,
      );

      expect(mockSessionRepository.findOne).toHaveBeenCalledWith({
        where: { id: temaDto.id },
      });
      expect(mockSessionRepository.save).not.toHaveBeenCalled(); // save should not be called
    });
  });

  describe('getTema', () => {
    it('should return the theme for the given id', async () => {
      const existingTema = { id: 1, isDark: false, font: 'Times New Roman' };
      mockSessionRepository.findOneBy.mockResolvedValue(existingTema);

      const result = await service.getTema(1);
      expect(result).toEqual(existingTema);
      expect(mockSessionRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    });

    it('should return NotFoundException if the theme does not exist', async () => {
      mockSessionRepository.findOneBy.mockResolvedValue(null);

      const result = await service.getTema(1);
      expect(result).rejects.toThrow(NotFoundException);
      expect(mockSessionRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    });
  });

  describe('crearTema', () => {
    it('should create a new theme and return it', async () => {
      const temaDto: SessionDto = { id: 1, isDark: false, font: 'Arial' };
      const newTema = { id: 1, ...temaDto };

      mockSessionRepository.create.mockReturnValue(newTema);
      mockSessionRepository.save.mockResolvedValue(newTema);

      const result = await service.crearTema(temaDto);
      expect(result).toEqual(newTema);
      expect(mockSessionRepository.create).toHaveBeenCalledWith(temaDto);
      expect(mockSessionRepository.save).toHaveBeenCalledWith(newTema);
    });
  });

  describe('eliminarTema', () => {
    it('should delete the theme for the given id', async () => {
      const id = 1;
      mockSessionRepository.delete.mockResolvedValue({ affected: 1 });

      const result = await service.eliminarTema(id);
      expect(result).toBe(true);
      expect(mockSessionRepository.delete).toHaveBeenCalledWith(id);
    });

    it('should return false if the theme does not exist', async () => {
      const id = 1;
      mockSessionRepository.delete.mockResolvedValue({ affected: 0 });

      const result = await service.eliminarTema(id);
      expect(result).toBe(false);
      expect(mockSessionRepository.delete).toHaveBeenCalledWith(id);
    });
  });
});
