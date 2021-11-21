import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Pop } from './model/pop.model'

export class PopService {
  constructor(
    @InjectRepository(Pop)
    private readonly popRepository: Repository<Pop>,
  ) {}

  createPop(pop: Pop): Promise<Pop> {
    return this.popRepository.save(pop)
  }

  getPops(): Promise<Pop[]> {
    return this.popRepository.find()
  }

  getPopByGuild(guild: string): Promise<Pop> {
    return this.popRepository.findOne({
      where: {
        guild,
      },
    })
  }

  updatePop(pop: Pop): Promise<Pop> {
    return this.popRepository.save(pop)
  }
}
