import Tag from "../Tag";
import "./style.css"

type CardProps = {
  item: {
    name: string;
    image: string;
    gender: string;
    species: string;
    status: string;
    origin: {
      name: string;
    }
  }
}

export default function Card({item}: CardProps) {
  const {name, image, gender, species, status, origin: {name: originName} } = item;

  const tags = [`Gênero: ${gender}`,`Espécie: ${species}`,`Status: ${status}`, `Origem: ${originName}`]
  
  return <section className="card">
    <h2>{name}</h2>

    <section className="tags">
      {tags.map((tags, index) => (
        <Tag key={`card_tag_${index}`} text={tags} />
      ))}
    </section>

    <img src={image} />
  </section>
}