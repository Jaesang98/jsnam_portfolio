// import University_Logo from '../../assets/img/University_Logo.png'
function HOME_EDUCATION() {
  return (
    <div className="education-container">
      <div className='education-title'>
        <h1 className="">EDUCATION!</h1>
      </div>

      <div className='education'>
        <div className="education-contents">
          <div className='education-header'>
            {/* <img className='education-logo' src={University_Logo}></img> */}
            <div className='education-name'>한신대학교 (정보통신학부)</div>
            <span className='education-date'>2017.03 ~ 2023.03</span>
          </div>

          <div className='education-content'>
            <p>기초적으로 C, Java, JavaScript와 같은 프로그래밍 언어와 함께 자료구조, 운영체제 등의 과목을 학습했습니다.</p>
            <p className='mt15'>랩실의 랩장 및 수업 조교로 활동하며, 어려움을 겪는 학생들을 돕고 학업을 지원했습니다.</p>
            <p className='mt15'>스터디 그룹을 통해 후배들에게도 배운 지식을 쉽게 설명하고, 그들이 더 깊이 이해할 수 있도록 지원한 경험이 있습니다.</p>
          </div>
        </div>

        <div className="education-contents">
          <div className='education-header'>
            {/* <img className='education-logo' ></img> */}
            <div className='education-name'>IPP(일학습병행제)</div>
            <span className='education-date'>2021.03 ~ 2023.01</span>
          </div>

          <div className='education-content'>
            <p>대학 재학 중, 기업과의 협력으로 장기현장실습 및 일학습병행 프로그램에 참여했습니다.</p>
            <p className='mt15'>입사 전, 파이썬, 자바, C++, 안드로이드 스튜디오 등 다양한 기술을 배우는 전용 강의를 수강했습니다.</p>
            <p className='mt15'>5개 이상의 강의 중, 3개 이상의 팀 프로젝트에서 리더 역할을 맡아 팀을 성공적으로 이끌었습니다.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HOME_EDUCATION;