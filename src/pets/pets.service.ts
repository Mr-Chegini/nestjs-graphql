import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}
  create(createPetInput: CreatePetInput): Promise<Pet> {
    return this.petsRepository.save(createPetInput);
  }

  findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  async findOne(id: number): Promise<Pet> {
    const pet = await this.petsRepository.findOne({ where: { id } });
    if (!pet) throw new NotFoundException();
    return pet;
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
