import React, { useState } from "react";

import { useUserStore } from '../store';

function UsersForm(props) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  
  const addUserAction = useUserStore(store => store.actions.addUser);

  const createUser = (event) => {
    event.preventDefault();

    addUserAction({name, phone});
    setName('');
    setPhone('');

    alert('Cadastrado com sucesso!');
    props.history.push("/");
  }

  return (
    <>
      <h2>Cadastro de Usuários</h2>

      <form style={{
        display: 'flex', 
        gap: '1em',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '50%',
        margin: '3em auto'
      }}
      onSubmit={createUser}
      >
        <input
          style={{
            padding: '1em', 
          }}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          style={{
            padding: '1em',
          }}
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />

        <button type="submit" style={{
          padding: '1em',
          cursor: 'pointer'  
        }}>
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default UsersForm;
