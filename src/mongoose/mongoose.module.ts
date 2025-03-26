import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from './admin-model';
import { UserSchema } from './user-model';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Admin', schema: AdminSchema },
            { name: 'User', schema: UserSchema },
        ]),
    ],
    exports: [MongooseModule],
})
export class MongooseSchemasModule { }