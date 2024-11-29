function Header({scrollToElement} ) {
  return (
    <div className="header-container">
      <h2 className="header-title" onClick={() => scrollToElement(0)}>MY PROFILE</h2>
      <div className="header-links">
        <p className="header-link" onClick={() => scrollToElement(1)}>ABOUT ME</p>
        <p className="header-link" onClick={() => scrollToElement(2)}>SKILLS</p>
        <p className="header-link" onClick={() => scrollToElement(3)}>CAREER</p>
        <p className="header-link" onClick={() => scrollToElement(4)}>PROJECT</p>
        <p className="header-link" onClick={() => scrollToElement(5)}>EDUCATION</p>
      </div>
    </div>

  );
}

export default Header;