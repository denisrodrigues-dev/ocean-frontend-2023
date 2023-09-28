type TagProps = {
  text: string;
}

export default function Tag({text}: TagProps) {
  return (
    <div className="tag">{text}</div>
  )
}
