import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private repository: Repository<Application>,
  ) {}
  create(createApplicationDto: CreateApplicationDto) {
    return this.repository.save(createApplicationDto)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} application`;
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
