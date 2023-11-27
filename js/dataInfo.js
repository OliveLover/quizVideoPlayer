/*인덱스*/
var indexInfo = [
  {
    title: "본강의1",
    location: "06.html",
  },
  {
    title: "본강의2",
    location: "07.html",
  },
  {
    title: "본강의3",
    location: "08.html",
  },
];

/* 사전평가 */
var pQuizInfo = [
  {
    number: 1,
    correct: true,
    question: "IT 기술영업의 주요 상품과 서비스를 알고 있다."
  },
  {
    number: 2,
    correct: true,
    question: "IT기술영업의 주요 직무역량을 이해하고 있다."
  },
  {
    number: 3,
    correct: true,
    question: "ChatGPT를 영업에 활용할 수 있다."
  },
  {
    number: 4,
    correct: true,
    question: "고객의 니즈를 분석하여 회사의 강점을 설명할 수 있다."
  },
  {
    number: 5,
    correct: true,
    question: "경쟁사 대비 자사의 강점을 파악하고 있다."
  },
  {
    number: 6,
    correct: true,
    question: "타겟고객의 주요 니즈를 파악할 수 있다."
  },
  {
    number: 7,
    correct: true,
    question: "IT기술영업 목표를 수립할 수 있다."
  },
  {
    number: 8,
    correct: true,
    question: "사업계획서에 맞춤형 솔루션의 내용을 작성할 수 있다."
  },
  {
    number: 9,
    correct: true,
    question: "경쟁사 대비 자사 제안의 매력을 알고 있다."
  },
  {
    number: 10,
    correct: true,
    question: "우리 서비스의 적적 가격을 알고 있다."
  }
];

/* 학습 전 퀴즈 */
var quizInfo_1 = new Object();
quizInfo_1[1] = [
  {
    correct: "3",
    layout: "column",
    question: "IT기술영업에서 클라우드 서비스는 기업의 비즈니스 혁신에 중요한 역할을 한다.",
    rubric: "",
    explain: "안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.안전보호구는 외관이나 디자인이 양호해야 한다.",
    scroll: "none",
  },
  { select: "착용하여 작업하기 쉬울 것" },
  { select: "마무리가 양호할 것" },
  { select: "디자인은 중요하지 않음" },
  { select: "유해위험물질로부터 보호성능이 충분할 것" },
];
quizInfo_1[2] = [
  {
    correct: "1",
    layout: "column",
    question:
      "고열에 의한 화상 등의 위험이 있는 작업에서 착용해야 하는 보호구는?",
    rubric: "",
    explain:
      "고열에 의한 화상 등의 위험이 있는 작업에는 방열복을 착용하며, 섭씨 영하 18도 이하인 급냉동어장에서 하는 하역작업 시 착용하는 보호구는 방한모, 방한복, 방한화, 방한장갑을 착용한다.",
    scroll: "none",
  },
  { select: "방열복" },
  { select: "방한모" },
  { select: "방한복" },
  { select: "방한장갑" },
];
quizInfo_1[3] = [
  {
    correct: "4",
    layout: "column",
    question: "안전화 사용방법 및 관리의 설명 중 틀린 것은? ",
    rubric: "",
    explain: "정전화는 감전 위험 장소에서 착용을 금지한다.",
    scroll: "none",
  },
  { select: "안전화 훼손 금지" },
  { select: "내부 항상 건조 관리" },
  { select: "가죽제 안전화는 물에 젖지 않도록 관리" },
  { select: "정전화는 감전 위험 장소에서 착용" },
];

/* 평가하기 */
var quizInfo_2 = new Object();
quizInfo_2[1] = [
  {
    correct: "3",
    layout: "column",
    question: "문제 1",
    rubric: "",
    explain: "문제 1 해설aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    scroll: "none",
  },
  { select: "선택지 1" },
  { select: "선택지 2" },
  { select: "선택지 3 (정답)" },
  { select: "선택지 4" },
];
quizInfo_2[2] = [
  {
    correct: "1",
    layout: "column",
    question:
      "문제 2",
    rubric: "",
    explain:
      "문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.문제 2 해설.",
    scroll: "none",
  },
  { select: "선택지 1 (정답)" },
  { select: "선택지 2" },
  { select: "선택지 3" },
  { select: "선택지 4" },
];
quizInfo_2[3] = [
  {
    correct: "4",
    layout: "column",
    question: "문제 3",
    rubric: "",
    explain: "문제 3 해설",
    scroll: "none",
  },
  { select: "선택지 1" },
  { select: "선택지 2" },
  { select: "선택지 3" },
  { select: "선택지 4 (정답)" },
];

/*** OX퀴즈1***/
var quizInfo_ox_1 = new Object();
quizInfo_ox_1[1] = [
  {
    correct: "1",
    layout: "column",
    question: "IT기술영업에서 클라우드 서비스는 기업의 비즈니스 혁신에 중요한 역할을 한다.",
    rubric: "",
    explain: "클라우드 서비스는 기업의 비즈니스 혁신에 매우 중요하다. 클라우드는 비즈니스의 유연성을 증가시키고,<br>IT 비용을 절감하는 등 여러 혜택을 제공한다. 이는 기업이 빠르게 변화하는 시장 환경에 적응하고, 새로운<br> 기회를 포착하는 데 도움을 준다.",
    scroll: "none",
  },
  { select: "O" },
  { select: "X" },
];
quizInfo_ox_1[2] = [
  {
    correct: "2",
    layout: "column",
    question:
      "IT기술영업에서는 모든 제품이 한 번의 프로젝트로 끝나며, 장기적인 관계를 유지하지 않는다.",
    rubric: "",
    explain:
      "IT기술영업은 단발성 프로젝트뿐만 아니라, 장기적인 고객 관계와 파트너십을 중시한다. 이는 고객의<br>지속적인 IT 요구를 충족시키고, 신뢰를 구축하는 데 중요하다. 장기적인 관계는 상호 협력을 통해 더 나은<br>결과를 가져올 수 있다.",
    scroll: "none",
  },
  { select: "O" },
  { select: "X" },
];
quizInfo_ox_1[3] = [
  {
    correct: "2",
    layout: "column",
    question: "IT기술영업에서 보안 솔루션은 주로 온프레미스 방식으로만 제공된다.",
    rubric: "",
    explain: "IT기술영업에서는 온프레미스 방식뿐만 아니라 클라우드 기반 보안 솔루션도 제공된다.<br>클라우드 보안 솔루션은 원격 업무 환경 및 비즈니스의 디지털 전환에 적합하며, 효율적인 보안 관리와<br>유연성을 제공한다.",
    scroll: "none",
  },
  { select: "O" },
  { select: "X" },
];

/*** OX퀴즈2 ***/
var quizInfo_ox_2 = new Object();
quizInfo_ox_2[1] = [
  {
    correct: "2",
    layout: "column",
    question: "IT기술영업에서 클라우드 서비스는 주로 공공기관과 금융기관에 제공되지 않는다.",
    rubric: "",
    explain: "IT기술영업에서 클라우드 서비스는 공공기관과 금융기관을 포함한 다양한 업종에 제공된다. 특히 공공기관과<br>금융기관은 높은 보안과 안정성이 필요한 분야로, 클라우드 서비스는 이러한 요구를 충족시킬 수 있는<br>해결책을 제공한다.",
    scroll: "none",
  },
  { select: "O" },
  { select: "X" },
];
quizInfo_ox_2[2] = [
  {
    correct: "1",
    layout: "column",
    question:
      "기술영업에서 제공되는 보안 솔루션에는 데이터 보안 및 네트워크 보안이 포함된다.",
    rubric: "",
    explain:
      "IT기술영업에서 제공되는 보안 솔루션은 데이터 보안 및 네트워크 보안을 포함한다. 이러한 솔루션은 기업의<br> 중요 데이터를 보호하고, 네트워크 침입 및 다양한 사이버 위협으로부터 안전을 유지하는 데 필수적이다.",
    scroll: "none",
  },
  { select: "O" },
  { select: "X" },
];
quizInfo_ox_2[3] = [
  {
    correct: "2",
    layout: "column",
    question: "IT기술영업에서는 디지털 변환을 위한 기술 역량이 중요하지 않다.",
    rubric: "",
    explain: "IT기술영업에서 디지털 변환을 위한 기술 역량은 매우 중요하다. 디지털 변환은 비즈니스 모델의<br>혁신을 가능하게 하며, 경쟁 우위를 확보하는 데 중요한 역할을 한다.기술 역량은 기업이 이러한 변화를<br> 주도하고 새로운 시장 기회를 포착하는 데 필수적이다.",
    scroll: "none",
  },
  { select: "O" },
  { select: "X" },
];

/* 추천영상 사이트 */
var recommendInfo = [
  {
    link: "https://www.eniedu.co.kr/course",
    title: "추천강의 영상 1"
  },
  {
    link: "https://www.eniedu.co.kr/course",
    title: "추천강의 영상2"
  },
  {
    link: "https://www.eniedu.co.kr/course",
    title: "추천강의 영상3"
  }
];