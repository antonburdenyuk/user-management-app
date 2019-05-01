import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { User } from 'src/user/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOneOrFail(email);
  }

  createUser(userDto: UserDto) {
    this.userRepository
      .createQueryBuilder()
      .insert()
      .into('user')
      .values([{ ...userDto }])
      .execute();
  }

  updateUser() {
    
  }
}
