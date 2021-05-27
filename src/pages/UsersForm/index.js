import React, { useState } from "react";

import { useUserStore } from '../../store';

import './styles.css';

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

      <form 
        className="userForm"
        onSubmit={createUser}
      >
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />

        <button type="submit" className="submitBtn">
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default UsersForm;
