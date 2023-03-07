import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
export declare class ApplicationsController {
    private readonly applicationsService;
    constructor(applicationsService: ApplicationsService);
    create(createApplicationDto: CreateApplicationDto): Promise<CreateApplicationDto & import("./entities/application.entity").Application>;
    findAll(): Promise<import("./entities/application.entity").Application[]>;
    findOne(id: string): string;
    update(id: string, updateApplicationDto: UpdateApplicationDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
