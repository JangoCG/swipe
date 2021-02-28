package backend.jango.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

  @RequestMapping
  public String getUsers() {
    return "hi from backend";

  }

}
