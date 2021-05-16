package backend.jango.backend.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@Table(name="users")
public class User {

  @Id
  @GeneratedValue
  private UUID id;

  @Column
  private String name;
}
