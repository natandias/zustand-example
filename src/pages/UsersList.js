import React from "react";

import { useUserStore } from "../store";

import "./styles.css";

function UsersList() {
  const users = useUserStore(store => store.state.users);
  const deleteUserAction = useUserStore(store => store.actions.deleteUser);

  const deleteUser = id => {
    deleteUserAction(id);
  };

  return (
    <>
      <h2>Listagem de Usuários</h2>

      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
        {users.map(user => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>
              <button onClick={() => deleteUser(user.id)}>
                Deletar usuário
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default UsersList;
