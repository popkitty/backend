import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // TODO: apply ValidationPipe
  app.enableCors()
  await app.listen(3002)
}
bootstrap()
