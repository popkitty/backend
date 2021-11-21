import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PopModule } from './pop/pop.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'popkitty_backend',
      entities: ['dist/**/*.model.js'],
      synchronize: true,
    }),
    PopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
