import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(userDto) {
    const user = new UserEntity();
    user.name = userDto.name;
    return this.userRepository.save(user);
  }

  getUserById(id) {
    return this.userRepository.findOneBy({
      id: id,
    });
  }
}
