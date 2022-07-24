import { IonMenu, IonToolbar, IonTitle, IonList, IonItem, IonContent, IonHeader } from "@ionic/react";
import React from "react";

const Menu: React.FC = () => {

  return (
    <IonMenu side="start" menuId="menu1" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Men&uacute;</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/home">
            <IonTitle>Home</IonTitle>
          </IonItem>
          <IonItem button routerLink="/about">
            <IonTitle>About</IonTitle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;