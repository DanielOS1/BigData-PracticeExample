import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(data: Partial<User>) {
    const user = new this.userModel(data);
    return user.save();
  }

  findAll(filter: any = {}) {
    return this.userModel.find(filter).exec();
  }

  update(id: string, data: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  deleteAll() {
  return this.userModel.deleteMany({}).exec();
}
}
