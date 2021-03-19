package backend.jango.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  @RequestMapping
  public String getUsers() {
    return "hi from backend";
  }

  @PostMapping
  public String registerUser() {
    return "post route works";
  }

}
