interface IProps {
  title: string;
  description: string;
  thumbnail_url: string;
}
function ContentsListItem({ title, description, thumbnail_url }: IProps) {
  return (
    <li>
      <div>
        <figure>
          <img src={thumbnail_url} alt='' />
        </figure>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ContentsListItem;
