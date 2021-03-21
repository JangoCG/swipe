package backend.jango.backend.service;

import backend.jango.backend.model.dto.UserDto;
import backend.jango.backend.model.entity.User;
import backend.jango.backend.model.mapper.UserMapper;
import backend.jango.backend.model.repository.UserRepository;
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
    User user = userMapper.userDtoToUser(userDto);
    user = userRepository.save(user);
    System.out.println("email of saved user is: " + user.getEmail());
    return userMapper.userToUserDto(user);
  }
}
