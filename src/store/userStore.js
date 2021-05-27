import create from 'zustand';

const useUserStore = create(set => ({
  users: [{id: 1, name: "Teste1", phone: "3899323"}],
  addUser: (user) => set(state => (
  { users: [...state.users, {...user, id: state.users.length + 1}] }
  )),
  deleteUser: (id) => set(state => ({ users: state.users.filter(user => user.id !== id) }))
}));

export default useUserStore;