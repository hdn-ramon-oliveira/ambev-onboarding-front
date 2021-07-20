import api from './api';


const getUsers = async () => {
  const respose = await api.get(`/users`)

  return respose.data
}

export default getUsers;
