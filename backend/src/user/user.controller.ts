import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('email')
  findOneByEmail(@Body() email: string): Promise<User> {
    return this.userService.findOneByEmail(email);
  }

  @Post()
  createUser(@Body() user: UserDto) {
    this.userService.createUser(user);
  }
}
