import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton></IonMenuButton>
            <IonTitle>Acerca de Aplicaci&oacute;n Pel&iacute;culas</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Creada para el curso Ionic + React 2022</h2>
      </IonContent>
    </IonPage>
  );
};

export default About;