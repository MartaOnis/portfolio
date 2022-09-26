import '../styles/DetailProject.scss';
const DetailProject = (props) => {
  return (
    <article className="detailProject">
      <a className="detailLink" href={props.route}>
        <img
          className="detailProject__img"
          src={props.img}
          alt={`Imagen del proyecto ${props.alt}`}
          title={props.title}
        ></img>
        <p className="detailProject__des">
          {props.des}
          <span className="detailProject__des des2">{props.des2}</span>
        </p>
      </a>
    </article>
  );
};
export default DetailProject;
