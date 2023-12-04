import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

interface IDbClient {
  readonly client: PrismaClient;
}

@Injectable()
export class DatabaseService implements IDbClient {
  private _client: PrismaClient;

  constructor() {
    this._client = new PrismaClient({ log: [{ emit: 'event', level: 'query' }] });
  }

  public get client() {
    return this._client;
  }
}

// @Injectable()
// export class DatabaseService extends PrismaClient
//   implements OnModuleInit, OnModuleDestroy {
//   constructor() {
//     super({ errorFormat: 'pretty' });
//   }

//   async onModuleInit() {
//     await this.$connect();
//   }

//   async onModuleDestroy() {
//     await this.$disconnect();
//   }
// }
