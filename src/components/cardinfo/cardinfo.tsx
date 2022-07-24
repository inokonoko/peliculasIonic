import React from 'react';
import { useHistory } from 'react-router';
import { IonCard } from '@ionic/react';


const Cardinfo: React.FC<{ peli: { poster_path: string; id: number; title: string } }> = (props) => {
  const history = useHistory();
  const image = 'https://image.tmdb.org/t/p/w220_and_h330_face' + props.peli.poster_path;

  const doNav = () => {
    history.push(`/pelicula/${props.peli.id}/${props.peli.title}`);
  };

  return (
    <IonCard button onClick={doNav}>
      <img alt="Carátula película" src={image}></img>
    </IonCard>
  );
};

export default Cardinfo;