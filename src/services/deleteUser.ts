import api from './api';

const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);

  return response;
};

export default deleteUser;
