import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';

@Injectable()
export class HrRepository {
  constructor(private readonly prisma: PrismaService) {}

  findEmployees() {
    return this.prisma.employee.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}
