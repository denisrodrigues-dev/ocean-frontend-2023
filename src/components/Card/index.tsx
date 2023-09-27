import Tag from "../Tag";
import "./style.css"

type CardProps = {
  item: {
    nome: string;
    imagemUrl: string;
  }
}

export default function Card(props: CardProps) {
  const item = props.item;

  return <div className="card">
    <h2>{item.nome}</h2>

    <div className="tags">
      <Tag />
    </div>

    <img src={item.imagemUrl} />
  </div>
}