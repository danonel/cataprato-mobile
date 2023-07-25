import { useMutation } from 'react-query';
import { createUser } from '../features/user';
import { CreateUserDTO } from '../features/user/dto/create-user.dto';

export const useCreateUser = () => {
  const mutation = useMutation((userDetails: CreateUserDTO) => createUser().create(userDetails));

  return mutation;
};