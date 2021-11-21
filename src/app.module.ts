import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PopModule } from './pop/pop.module'
import { DatabaseConfigModule } from './config/database/config.module'
import { DatabaseConfigService } from './config/database/config.service'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      useFactory: (config: DatabaseConfigService) => {
        return {
          type: 'postgres',
          host: config.host,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          entities: ['dist/**/*.model.js'],
          synchronize: config.synchronize,
        }
      },
      inject: [DatabaseConfigService],
    }),
    PopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
