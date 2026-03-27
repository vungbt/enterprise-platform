import { Injectable } from '@nestjs/common';
import { HrRepository } from '../repositories/hr.repository';

@Injectable()
export class HrService {
  constructor(private readonly hrRepository: HrRepository) {}

  getEmployees() {
    return this.hrRepository.findEmployees();
  }
}
