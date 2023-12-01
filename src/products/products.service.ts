import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ProductsService {
  constructor(private database: DatabaseService) {}

  async findAll() {
    return await this.database.client.product.findMany();
  }

  async findOne(id: string) {
    const cart = await this.database.client.product.findFirst({ where: { id } });
    if (cart) {
      return cart;
    }

    return new NotFoundException();
  }
}