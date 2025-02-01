import githubIcon from "../../assets/img/free-icon-github.png";
import velogIcon from "../../assets/img/velogIcon.png";

function ControlBtn({ scrollToElement }) {
  return (
    <>
      <div
        className="controlbtn-github"
        onClick={() => {
          window.open("https://github.com/Jaesang98/", "_blank");
        }}
      >
        <img className="control-github" src={githubIcon}></img>
      </div>

      <div
        className="controlbtn-velog"
        onClick={() => {
          window.open("https://velog.io/@jaesang98/posts", "_blank");
        }}
      >
        <img className="control-velog" src={velogIcon}></img>
      </div>

      <div
        className="control-arrow"
        onClick={() => {
          scrollToElement(0);
        }}
      >
        <div className="control-arrow-btn">↑</div>
      </div>
    </>
  );
}

export default ControlBtn;
