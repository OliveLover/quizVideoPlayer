/*인덱스*/
var indexInfo = [
  {
    title: "본강의1",
    location: "05.html",
  },
  {
    title: "본강의2",
    location: "06.html",
  },
  {
    title: "본강의3",
    location: "07.html",
  },
];

/* 사전평가 */
var pQuizInfo = [
  {
    number: 1,
    correct: true,
    question: "1번 문제 질문"
  },
  {
    number: 2,
    correct: false,
    question: "2번 문제 질문"
  },
  {
    number: 3,
    correct: false,
    question: "3번 문제 질문"
  },
  {
    number: 4,
    correct: false,
    question: "4번 문제 질문"
  },
  {
    number: 5,
    correct: true,
    question: "5번 문제 질문"
  },
  {
    number: 6,
    correct: false,
    question: "6번 문제 질문"
  },
  {
    number: 7,
    correct: true,
    question: "7번 문제 질문"
  },
  {
    number: 8,
    correct: false,
    question: "8번 문제 질문"
  },
  {
    number: 9,
    correct: true,
    question: "9번 문제 질문"
  },
  {
    number: 10,
    correct: false,
    question: "10번 문제 질문"
  }
];

/* 평가하기 */
var quizInfo = new Object();
quizInfo[1] = [
  {
    correct: "3",
    layout: "column",
    question: "다음 중 안전보호구의 구비요건 설명으로 틀린 것은?",
    rubric: "",
    explain: "안전보호구는 외관이나 디자인이 양호해야 한다.",
    scroll: "none",
  },
  { select: "착용하여 작업하기 쉬울 것" },
  { select: "마무리가 양호할 것" },
  { select: "디자인은 중요하지 않음" },
  { select: "유해위험물질로부터 보호성능이 충분할 것" },
];
quizInfo[2] = [
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
quizInfo[3] = [
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
