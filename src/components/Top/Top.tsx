import './style.css';

export function Top() {
  return (
    <header>
      <div>
        <h1 className="logo">Portfólio</h1>
      </div>

      <nav>
        <a href="#aboutMe">Sobre mim</a>
        <a href="#projects">Projetos</a>
        <a href="#services">Serviços</a>
        <a href="#mySkills">Tecnologias</a>
      </nav>
    </header>
  );
}