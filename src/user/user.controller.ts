import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body) {
    return this.userService.create(body);
  }

  @Get()
  findAll(@Query() query) {
    return this.userService.findAll(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Delete()
    deleteAll() {
    return this.userService.deleteAll();
  }

}
