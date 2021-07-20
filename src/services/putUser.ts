import api from './api';

interface UserProps {
  Name?: string
  Nickname?: string
  Email?: string
  AvatarUrl?: string
  Password?: string
}

const putUser = async (data: UserProps) => {
  const response = await api.put('/users', data);

  return response;
};

export default putUser;
