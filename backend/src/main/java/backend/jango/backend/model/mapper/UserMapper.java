package backend.jango.backend.model.mapper;

import backend.jango.backend.model.dto.UserDto;
import backend.jango.backend.model.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

  UserDto toDto(User user);

  User toUser(UserDto userDto);

}
