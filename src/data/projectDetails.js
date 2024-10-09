// 클라이밍
import clim_main from '../assets/img/clim_main.png'
import clim_Login from '../assets/img/clim_Login.png'
import clim_commu from '../assets/img/clim_commu.png'
import clim_find from '../assets/img/clim_find.png'
import clim_detail from '../assets/img/clim_detail.png'
import clim_naverMap from '../assets/img/clim_naverMap.png'

//jsdev
import dev_code from '../assets/img/dev_code.png'
import dev_main from '../assets/img/dev_main.png'

//portfolio
import port_profile from '../assets/img/port_profile.png'
import port_aboutme from '../assets/img/port_aboutme.png'
import port_career from '../assets/img/port_career.png'
import port_project from '../assets/img/port_project.png'

const projectDetails = [{
  prDetail_id: "1",
  prDetail_team: "T",
  prDetail_title: "정상에서 만나요",
  prDetail_date: "2024.07 ~ 2024.09",
  prDetail_description: "클라이밍을 즐기는 사람들과 초보자들이 쉽게 접근할 수 있도록 편리함을 제공하는 웹사이트입니다.",
  prDetail_techStack: "React, JavaScript, CSS",
  prDetail_features: [
    "내 위치와 가까운 클라이밍장 확인 및 예약 기능",
    "커뮤니티 및 파티 기능",
    "카카오, 네이버 로그인을 통한 사용자 정보 관리",
  ],
  prDetail_role: "기획 및 디자인, 화면 퍼블리싱, 프론트엔드 전 페이지 및 공통 기능 개발",
  prDetail_reflections: "React를 처음 사용하며 기존 Vue와의 상태 관리 및 컴포넌트 구조의 차이를 명확하게 이해하게 되었습니다.",
  prDetail_images: [
    clim_main, clim_Login, clim_commu, clim_find, clim_detail, clim_naverMap
  ],
  prDetail_challenges: {
    problem: "네이버 및 카카오 API 사용 시 백엔드에서 처리하지 않고 프론트에서 직접 호출할 경우, 카카오는 작동하지만 네이버에서 CORS 오류가 발생했습니다.",
    solution: "백엔드에서 네이버 및 카카오 API 서버와 통신하여 데이터를 전달받았습니다.",
  },
  prDetail_outcomes: "프로젝트 초기에는 프론트엔드, 백엔드, 기획자 포함 총 5명이 팀을 구성했으나 개인 사정으로 인해 프론트엔드 1명, 백엔드 1명이 남아 제작하게 되었습니다. 이로 인해 예상보다 시간이 더 소요되었고, 기획된 화면의 수정이 필요했습니다. 추후 고도화 작업을 진행할 예정입니다.",
  prDetail_links: {
    projectLink: "",
    githubLink: "https://github.com/Jaesang98/summit_meeting",
  }},

  {
    prDetail_id: "2",
    prDetail_team: "S",
    prDetail_title: "JSDEV",
    prDetail_date: "2024.09 ~",
    prDetail_description: "프로젝트를 진행할 때 자주 사용하는 기능들을 정리해 놓아 편하게 쓸 수 있도록 제작한 디벨롭 사이트 입니다.",
    prDetail_techStack: "Vue, JavaScript, CSS",
    prDetail_features: [
      "iframe을 사용하여 실제 구현가능",
      "구현된 iframe화면의 코드를 highlight.js를 사용하여 코드 확인가능",
    ],
    prDetail_role: "기획 및 디자인, 화면 퍼블리싱, 프론트엔드 전 페이지 및 공통 기능 개발",
    prDetail_reflections: "디벨롭 사이트를 통해 자주 사용하는 기능들인 유틸 뿐 아니라 외부 라이브러리 및 API 그리고 각 프레임워크에서 자주 사용하는 기능들을 정리하며 개발 효율성이 크게 향상되었습니다.",
    prDetail_images: [
      dev_main, dev_code
    ],
    prDetail_challenges: {
      problem: "프로젝트 진행 중 디자인 및 여러 iframe을 클라이언트에서 관리를 하다보니 유지 관리가 어려워지는 문제를 겪었습니다",
      solution: "디자인 문제를 해결하기 위해 사용자 피드백을 반영하여 UI를 개선하였고, iframe의 대한 url정보를 컴포넌트 기능으로 재구성하여 유지관리를 하였습니다",
    },
    prDetail_outcomes: "현재 계속해서 자주 사용하는 기능들을 정리하여 적용하고 있으며 추가로 기능을 코드로 적용하는 것이 아닌 백엔드 기능을 추가해 등록,수정 및 삭제등의 기능을 추가 할 예정입니다.",
    prDetail_links: {
      projectLink: "https://jaesang98.github.io/jsDevelop/",
      githubLink: "https://github.com/Jaesang98/jsDevelop",
    }},

    {
      prDetail_id: "3",
      prDetail_team: "S",
      prDetail_title: "포트폴리오",
      prDetail_date: "2024.10 ~ 2024.11",
      prDetail_description: "개인 포트폴리오 웹사이트를 제작하여 본인의 이력과 프로젝트를 시각적으로 표현한 웹사이트입니다",
      prDetail_techStack: "React, JavaScript, SCSS",
      prDetail_features: [
        "데스크톱 모바일 테블릿 반응협 웹",
        "소개, Skills, 커리어, 프로젝트, 교육 순으로 확인가능",
        "각 프로젝트의 상세 설명과 gitHub,배포링크 등 확인 가능"
      ],
      prDetail_role: "기획 및 디자인, 화면 퍼블리싱, 프론트엔드 전 페이지 및 공통 기능 개발",
      prDetail_reflections: "이전 프로젝트와 달리 디자인에 더욱 신경을 썼으며, React의 컴포넌트 구조를 최대한 활용하는 데 집중했습니다. 이를 통해 디자인 감각과 React 실력이 크게 향상되었습니다.",
      prDetail_images: [
        port_profile, port_aboutme, port_career, port_project
      ],
      prDetail_challenges: {
        problem: "디자인에 큰 어려움을 겪었고 퍼블리싱의 구조를 잡는데 시간이 오래걸렸습니다.",
        solution: "다양한 포트폴리오 사이트와 PPT 자료를 참고하여 퍼블리싱 구조를 설계했습니다. 시간이 다소 소요되었지만, 최종적으로 무사히 완성할 수 있었습니다.",
      },
      prDetail_outcomes: "포트폴리오 사이트를 통해 디자인과 개발 역량을 한층 더 발전시킬 수 있었습니다. React의 컴포넌트 구조와 퍼블리싱에 대한 이해가 깊어졌으며, 사용자 경험을 고려한 UI/UX 개선에도 성과를 보였습니다. 이 프로젝트를 통해 프론트엔드 기술의 전반적인 실력을 크게 향상시킬 수 있었습니다.",
      prDetail_links: {
        projectLink: "",
        githubLink: "",
      }},
];

export default projectDetails;
