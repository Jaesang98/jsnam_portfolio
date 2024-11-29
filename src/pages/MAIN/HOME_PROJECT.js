import { useState, useEffect } from 'react';
import projectData from '../../data/projectData';
import Readme from '../component/Readme';

function HOME_PROJECT() {
  //카테고리 값에 따라 프로젝트 보여줌
  const [category, selcategory] = useState("A");
  const filteredProjects = projectData.filter((item) => {
    if (category === "A") return true;
    if (category === "T") return item.pr_team === "T";
    if (category === "S") return item.pr_team === "S";
    return false;
  });

  //새 탭에서 URL호출
  function openSite(url) {
    window.open(url, '_blank');
  }


  //프로젝트의 상세 보기
  const [projectId, setprojectId] = useState("")
  function openReadme(id) {
    setprojectId(id);
  }

  // 모달 닫기 함수
  function closeReadme() {
    setprojectId("");
  }


  useEffect(() => {
    // 키보드 이벤트 핸들러 함수
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setprojectId("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="project-container">
      <div className='project-title'>
        <h1 className="">PROJECT!</h1>
      </div>

      <div className='project-category'>
        <div className='project-category-list'>
          <button className={`project-category-button ${category === "A" ? 'active' : ''}`} onClick={() => { selcategory('A') }}>ALL</button>
          <button className={`project-category-button ${category === "T" ? 'active' : ''}`} onClick={() => { selcategory('T') }}>Team</button>
          <button className={`project-category-button ${category === "S" ? 'active' : ''}`} onClick={() => { selcategory('S') }}>Solo</button>
        </div>
      </div>

      <div className="project-list">
        {
          filteredProjects.map((item, idx) => (
            <div className="project-contents" key={idx}>

              <div className='project-contents-taglist'>
                {item.pr_team === "T" ? <div className='project-tag'>Team</div> : <div className='project-tag'>Solo</div>}
              </div>

              <div className="project-img">
                <img src={item.pr_image}></img>
              </div>

              <div className='project-detail'>
                <div className="project-name">{item.pr_title}</div>
                <div className="project-details">{item.pr_detail}</div>

                <button className='project-readme' onClick={() => { openReadme(item.pr_id) }}>상세보기</button>
                {item.pr_sitelink ? <button className='project-site' onClick={() => { openSite(item.pr_sitelink) }}>사이트보기</button> : ""}

                <div className="project-date">{item.pr_date}</div>
              </div>
            </div>
          ))
        }
      </div>
      {projectId && <Readme projectId={projectId} closeReadme={closeReadme}></Readme>}
    </div>
  );
}

export default HOME_PROJECT;