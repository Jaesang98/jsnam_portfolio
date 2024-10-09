import githubIcon from '../../assets/img/free-icon-github.png'

function ControlBtn({ scrollToElement }) {
  return (
    <>
      <div className="control-arrow" onClick={() => { scrollToElement(0) }}>
        <div className="control-arrow-btn">↑</div>
      </div>

      <div className="controlbtn-github" onClick={() => { window.open('https://github.com/Jaesang98/', '_blank') }}>
        <img className="control-github" src={githubIcon}></img>
      </div>
    </>

  );
}

export default ControlBtn;