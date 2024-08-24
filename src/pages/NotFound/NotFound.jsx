import s from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div>
      <ul className={s.notFound}>
        <li>
          <h2>Page is not found 404</h2>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
