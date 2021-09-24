import { Controller, Module, Get } from "@nestjs/common";

@Controller() // decorator  to tesll nest that we are creating a class serve as controller
class AppController {
  @Get() // when a request come to this route this will be run
  getRootRoute() {
    return "hi there!";
  }
}
