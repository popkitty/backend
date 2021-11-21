import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Pop } from './model/pop.model'
import { PopController } from './pop.controller'
import { PopService } from './pop.service'

@Module({
  imports: [TypeOrmModule.forFeature([Pop])],
  providers: [PopService],
  controllers: [PopController],
  exports: [PopService],
})
export class PopModule {}
