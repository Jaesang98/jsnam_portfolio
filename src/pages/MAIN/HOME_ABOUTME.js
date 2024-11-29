import profileEmoji from '../../assets/img/profileEmoji.jpg'
import userimg from '../../assets/img/free-icon-user-5264565.png'
import calender from '../../assets/img/free-icon-calendar-4519547.png'
import location from '../../assets/img/free-icon-location-4519622.png'
import phone from '../../assets/img/free-icon-phone-call-3406380.png'
import email from '../../assets/img/free-icon-email-6658496.png'
import editing from '../../assets/img/free-icon-editing-3422804.png'

function HOME_ABOUTME() {
  return (
    <div className="about-container">
      <div className='about-title'>
        <h1 className="">ABOUT ME!</h1>
      </div>

      <div className='about-profile'>
        <div>
          <img className='about-profileEmoji' src={profileEmoji}></img>
        </div>

        <div className='about-profile-details'>
          <div className='about-profile-item'>
            <img className='about-profile-img' src={userimg}></img>
            <div className='about-profile-text'>
              <div className='about-profile-label'>이름</div>
              <div className='about-profile-user'>남재상</div>
            </div>
          </div>

          <div className='about-profile-item'>
            <img className='about-profile-img' src={calender}></img>
            <div className='about-profile-text'>
              <div className='about-profile-label'>생년월일</div>
              <div className='about-profile-user'>98.06.30</div>
            </div>
          </div>

          <div className='about-profile-item'>
            <img className='about-profile-img' src={location}></img>
            <div className='about-profile-text'>
              <div className='about-profile-label'>위치</div>
              <div className='about-profile-user'>수원시 장안구</div>
            </div>
          </div>
          <div className='about-profile-item'>
            <img className='about-profile-img' src={phone}></img>
            <div className='about-profile-text'>
              <div className='about-profile-label'>연락처</div>
              <div className='about-profile-user'>010-2443-1206</div>
            </div>
          </div>
          <div className='about-profile-item'>
            <img className='about-profile-img' src={email}></img>
            <div className='about-profile-text'>
              <div className='about-profile-label'>이메일</div>
              <div className='about-profile-user'>skawotkd12@naver.com</div>
            </div>
          </div>
          <div className='about-profile-item'>
            <img className='about-profile-img' src={editing}></img>
            <div className='about-profile-text'>
              <div className='about-profile-label'>학력</div>
              <div className='about-profile-user'>한신대학교(정보통신학부)</div>
            </div>
          </div>
        </div>
      </div>


      <div className='about-interview'>
        <div className='about-interview-title mb15'>INTERVIEW </div>

        <div className='about-interview-item'>
          <div className='about-interview-question mb15'>Q. 프론트엔드를 선택 한 이유가 무엇인가요?</div>
          <div className='about-interview-answer'>
            {/* <p>저는 원래 백엔드 개발자를 목표로 삼았으나, 회사의 상황으로 인해 프론트엔드 개발을 하게 되었습니다.</p>
            <p>처음에는 다소 불만이 있었지만, 프론트엔드를 작업해보면서 그 재미를 발견하게 되었습니다.</p> */}
            <p>제 성격이 창의적이고 사람들과의 소통을 중시하는 편인데, 이러한 특징이 프론트엔드 개발과 잘 맞았습니다. </p>
            <p>사용자 경험을 고려하며 디자인과 기능을 조화롭게 구현하는 과정에서 큰 만족감을 느꼈고</p>
            <p>프론트엔드 개발이 제게 맞는 길이라는 확신을 가지고 있습니다.</p>
          </div>
        </div>

        <div className='about-interview-item'>
          <div className='about-interview-question mb15'>Q. 프로젝트를 진행하면서 가장 힘들었던건 무엇인가요?</div>
          <div className='about-interview-answer'>
            <div className='project-interview-answer'>
              <p>프로젝트를 진행하면서 가장 힘들었던 점은 두 가지입니다.</p>
              <p className='mt15'>첫째, 다른 개발자가 작성한 코드와 외부 라이브러리, API를 적용하는 데 어려움이 있었습니다.</p>
              <p className='mb15'>특히 기존 코드의 구조가 낯설어 이해하는 데 시간이 걸렸습니다.</p>
              <p>둘째, 고객이 프로젝트 완료 일정에 대해 질문할 때입니다.</p>
              <p>기술적 제약이나 불확실성이 있을 때 확답을 드리기 힘들었고, 이 과정에서 고객과의 소통이 중요하다는 것을 깨달았습니다.</p>
            </div>
          </div>
        </div>

        <div className='about-interview-item'>
          <div className='about-interview-question mb15'>Q. 프로젝트를 진행하면서 가장 중요하다고 생각한것은 무엇인가요??</div>
          <div className='about-interview-answer'>
            <p className='mb15'>프로젝트를 진행하면서 가장 중요하다고 생각하는 것은 팀원들과의 소통입니다.</p>
            <p>소통이 원활하지 않을 경우 다툼이 발생하거나 페이지 수정이 반복되는 문제를 경험했습니다.</p>
            <p>이런 상황을 겪은 후, 팀원들과의 소통을 더욱 강조하고 있습니다.</p>
          </div>
        </div>

        <div className='about-interview-item'>
          <div className='about-interview-question mb15'>Q. 자기계발은 어떻게 하시나요?</div>
          <div className='about-interview-answer'>
            <p className='mb15'>자기계발은 주로 프로젝트를 진행하면서 느낀 부족한 부분을 보완하는 방식으로 합니다.</p>
            <p>부족한 기술이나 지식이 있을 때는 관련 강의를 듣고, 토이 프로젝트를 진행하여 실력을 쌓습니다.</p>
            <p>또한, 직장 상사나 선배들에게 도움을 요청해 부족한 부분을 보완하고 있습니다.</p>
            <p>특히, 새로운 것을 배우는 것을 좋아해서 다양한 프레임워크나 툴을 사용해보려고 시도하는 편입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME_ABOUTME;
