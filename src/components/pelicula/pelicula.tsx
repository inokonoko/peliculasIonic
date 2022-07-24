import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useParams } from "react-router";

const Pelicula: React.FC = () => {
  const { id, title } = useParams<{id:string;title:string}>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton></IonMenuButton>
            <IonTitle>Pel&iacute;cula id: {id}</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>{title}</h1>
      </IonContent>
    </IonPage>
  );
};

export default Pelicula;