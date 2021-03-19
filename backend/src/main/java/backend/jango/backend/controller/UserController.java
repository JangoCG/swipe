package backend.jango.backend.controller;

import backend.jango.backend.model.dto.UserDto;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
  public String registerUser(@RequestBody UserDto userDto) {
    System.out.println(userDto.getEmail());
    System.out.println(userDto.getPassword());
    return "post route works";
  }
}
