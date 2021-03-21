package backend.jango.backend.model.mapper;

import backend.jango.backend.model.dto.UserDto;
import backend.jango.backend.model.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

  UserDto userToUserDto(User user);

//  @Mapping(target="id", ignore = true)
@Mapping(target = "id", ignore = true)
User userDtoToUser(UserDto userDto);

}
