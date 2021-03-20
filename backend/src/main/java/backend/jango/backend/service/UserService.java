package backend.jango.backend.service;

import backend.jango.backend.model.dto.UserDto;
import backend.jango.backend.model.entity.User;
import backend.jango.backend.model.mapper.UserMapper;
import backend.jango.backend.model.repository.UserRepository;
import java.util.UUID;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class UserService {

  private final UserMapper userMapper;
  private final UserRepository userRepository;

  /**
   * Safe a new user in the db
   */
  public UserDto registerUser(UserDto userDto) {
    User user = userMapper.toUser(userDto);
    System.out.println(user);
    User testUser = new User();
    UUID uuid = UUID.randomUUID();
    testUser.setEmail("testMail");
    testUser.setPassword("testPw");
    testUser.setId(uuid);
    userRepository.save(testUser);
    userRepository.save(user);
    System.out.println("hi test");
    return userDto;
  }
}
