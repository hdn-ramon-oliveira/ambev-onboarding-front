import api from './api';

interface UserProps {
  Name?: string
  Nickname?: string
  Email?: string
  AvatarUrl?: string
  Password?: string
}

const postUser = async (data: UserProps) => {
  const response = await api.post('/users', data);

  return response;
};

export default postUser;
