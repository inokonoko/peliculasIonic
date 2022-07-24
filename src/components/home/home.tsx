import React from 'react';
import './home.css';
import pelisJSON from './../../assets/movies.json';
import Cardinfo from './../cardinfo/cardinfo';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  const peliculas = pelisJSON.slice(0, 5);

  const listaPeliculas = peliculas.map(peli => {
    return <Cardinfo key={peli.id} peli={peli} />;
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton></IonMenuButton>
            <IonTitle>Aplicaci&oacute;n Pel&iacute;culas</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="home">
          <h2>Pel&iacute;culas recientes</h2>
          <div className="peliculas">
            {listaPeliculas}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Home;