import React from 'react';
import "react-netlify-identity-widget/styles.css";
import { useIdentityContext } from "react-netlify-identity-widget";
//import { netlifyIdentity } from "react-netlify-identity";

import { Inventory } from "./Inventory.jsx";
import { Login } from "./Login.jsx";
import { LoadMessage } from "./LoadMessage.jsx";


export function Main(props) {
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn

  function loadingView() {
    return (
      <>
        <Login 
          setLoggedIn={props.setLoggedIn}
        />
        <LoadMessage />
      </>
    );
  }

  function loadedView() {
    return (
      <>
        <Login 
          setLoggedIn={props.setLoggedIn}
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
          addItemRow={props.addItemRow}
          removeItemRow={props.removeItemRow}
        />
      </>
    );
  }
  if(props.loading) {
    return loadingView();

  }
  else {
    return loadedView();
  }

}
