package backend.jango.backend.model.repository;

import backend.jango.backend.model.entity.User;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, UUID> { }