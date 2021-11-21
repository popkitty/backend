import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

interface DatabaseEnvironmentVariables {
  DB_TYPE: 'postgres'
  DB_HOST: string
  DB_PORT: number
  DB_USERNAME: string
  DB_PASSWORD: string
  DB_DATABASE: string
  DB_SYNCHRONIZE: boolean
}

@Injectable()
export class DatabaseConfigService {
  host: string
  port: number
  username: string
  password: string
  database: string
  synchronize: boolean
  logging: boolean

  constructor(private configService: ConfigService<DatabaseEnvironmentVariables>) {
    this.host = this.configService.get<string>('DB_HOST', 'localhost')
    this.port = this.configService.get<number>('DB_PORT', 5432)
    this.username = this.configService.get<string>('DB_USERNAME', 'db_username')
    this.password = this.configService.get<string>('DB_PASSWORD', 'db_password')
    this.database = this.configService.get<string>('DB_DATABASE', 'popkitty_backend')
    this.synchronize = this.configService.get<boolean>('DB_SYNCHRONIZE', true)
    this.logging = false
  }
}
