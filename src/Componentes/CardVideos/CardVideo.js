import { Video } from "./Style";

export function CardVideo(props) {
  
  return (
    <Video>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </Video>
  );
}


