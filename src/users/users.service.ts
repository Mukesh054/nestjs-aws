import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private database: DatabaseService) {}

  async findAll() {
    return await this.database.client.user.findMany();
  }

  async findOne(id: string) {
    return this.database.client.user.findFirst({ where: { id } });
  }

  async remove(id: string) {
    return await this.database.client.user.delete({ where: { id } });
  }
}