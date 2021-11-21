import { Controller, Post, Body, HttpCode, Logger, Get, Query, HttpStatus } from '@nestjs/common'
import { AddPopDto } from './dto/add-pop.dto'
import { Pop } from './model/pop.model'
import { PopService } from './pop.service'

@Controller('v1/pop')
export class PopController {
  private readonly logger = new Logger(PopController.name)

  constructor(private readonly popService: PopService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getPops(@Query('guild') guild = ''): Promise<Pop[]> {
    let pops = [] as Pop[]
    if (guild === '') {
      pops = await this.popService.getPops()
    } else {
      const pop = await this.popService.getPopByGuild(guild)
      if (pop) pops = [pop]
    }

    return pops
  }

  @Post('add')
  @HttpCode(HttpStatus.OK)
  async addPop(@Body() dto: AddPopDto): Promise<Pop> {
    let pop: Pop
    pop = await this.popService.getPopByGuild(dto.guild)

    // update or create
    if (pop) {
      // update
      pop.count = pop.count + dto.count
      pop = await this.popService.updatePop(pop)
    } else {
      this.logger.log(`create Pop for guild: ${dto.guild}`)
      pop = new Pop({
        count: dto.count,
        guild: dto.guild,
      })
      await this.popService.createPop(pop)
    }

    // re-get
    pop = await this.popService.getPopByGuild(dto.guild)

    return pop
  }
}
