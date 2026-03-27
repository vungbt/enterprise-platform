import { Injectable } from '@nestjs/common';
import { CrmRepository } from '../repositories/crm.repository';

@Injectable()
export class CrmService {
  constructor(private readonly crmRepository: CrmRepository) {}

  getCustomers() {
    return this.crmRepository.findCustomers();
  }
}
