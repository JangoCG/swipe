package backend.jango.backend.controller;

import backend.jango.backend.model.dto.UserDto;
import backend.jango.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

  private final UserService userService;


  @RequestMapping
  public String getUsers() {
    return "hi from backend";
  }

  @PostMapping
  public UserDto registerUser(@RequestBody UserDto userDto) {
     userService.registerUser(userDto);
    return userDto;
  }
}
