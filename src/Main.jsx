/// filename: Main.jsx
///	last modified: 07/30/2020
///	description: Stateless component which decides to render
///   between the login modal or the actual inventory table
///   (if user is already logged in).

import React from 'react';
import { useIdentityContext } from "react-netlify-identity";

import { Inventory } from "./Inventory.jsx";
import { Login } from "./Login.jsx";
import { LoadMessage } from "./LoadMessage.jsx";


export function Main(props) {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  function loadingView() {
    return (
      <>
        <Login
        />
        <LoadMessage />
      </>
    );
  }

  function loginView() {
    return (
      <Login
      />
    );
  }

  function loadedView() {
    return (
      <>
        <Login
        />
        <Inventory
          inventory={props.inventory}
          setItemEditMode={props.setItemEditMode}
          handleNumericInput={props.handleNumericInput}
          handleStringInput={props.handleStringInput}
          handleCancelEdits={props.handleCancelEdits}
          handleSaveEdits={props.handleSaveEdits}
          loading={props.loading}
          updating={props.updating}
          fetchError={props.fetchError}
          saving={props.saving}
          addItemRow={props.addItemRow}
          removeItemRow={props.removeItemRow}
          sortItems={props.sortItems}
        />
      </>
    );
  }
  if (!isLoggedIn) {
    return loginView();
  }
  else if (props.loading) {
    return loadingView();

  }
  else {
    return loadedView();
  }

}
