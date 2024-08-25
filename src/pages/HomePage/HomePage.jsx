import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={s.title}>Welcome to your Phonebook!</h1>

      <p className={s.subtitle}>Register or Login to get started</p>
    </div>
  );
};

export default HomePage;
