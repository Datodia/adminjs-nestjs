import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/mongoose/user-model';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
