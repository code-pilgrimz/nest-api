export class CreateUserDto {
  email: string;
  full_name: string;
  is_active: boolean;
  hashed_password: string;
}
