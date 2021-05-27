import create from "zustand";

const useUserStore = create(set => ({
  state: {
    users: [{ id: 1, name: "Teste1", phone: "3899323" }],
  },
  actions: {
    addUser: user =>
      set(store => ({
        state: { 
          ...store.state, 
          users: [...store.state.users, { ...user, id: store.state.users.length + 1 }] 
        },
      })),
    deleteUser: id =>
      set(store => ({ 
        state: { 
          ...store.state, 
          users: store.state.users.filter(user => user.id !== id)
        }  
      })),
  },
}));

export default useUserStore;
