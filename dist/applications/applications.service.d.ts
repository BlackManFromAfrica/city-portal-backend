import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from './entities/application.entity';
import { Repository } from 'typeorm';
export declare class ApplicationsService {
    private repository;
    constructor(repository: Repository<Application>);
    create(createApplicationDto: CreateApplicationDto): Promise<CreateApplicationDto & Application>;
    findAll(): Promise<Application[]>;
    findOne(id: number): string;
    update(id: number, updateApplicationDto: UpdateApplicationDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
