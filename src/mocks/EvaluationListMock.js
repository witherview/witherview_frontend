const evaluation = {
  evaluationList1: [
    {
      id: 0,
      checkListTypeId: 0,
      text: '묻는 말에 알맞은 대답을 했다.(동문서답 하지 않았다.)',
    },
    {
      id: 1,
      checkListTypeId: 0,
      text: '두괄식으로 처음부터 하고자 하는 말을 요약해서 전달했다.',
    },
    {
      id: 2,
      checkListTypeId: 0,
      text: '추상적인(열심히 했다 등) 답변을 하지 않았다.',
    },
    {
      id: 3,
      checkListTypeId: 0,
      text: '똑같은 단어, 문장을 반복하지 않았다.',
    },
    {
      id: 4,
      checkListTypeId: 0,
      text: '구체적인 예화, 사례, 근거를 통해 설명했다.',
    },
    {
      id: 5,
      checkListTypeId: 0,
      text: '불필요한 추임새(어..음..)을 하지 않았다.',
    },
    {
      id: 6,
      checkListTypeId: 0,
      text: '목소리가 작지 않았다.',
    },
    {
      id: 7,
      checkListTypeId: 0,
      text: '처음부터 끝까지 일관된 톤으로만 대답하지 않았다.',
    },
  ],
  evaluationList2: [
    {
      id: 8,
      checkListTypeId: 1,
      text: '복장이 단정하고 청결하다.',
    },
    {
      id: 9,
      checkListTypeId: 1,
      text: '얼굴과 몸을 좌우로 흔들지 않았다.',
    },
    {
      id: 10,
      checkListTypeId: 1,
      text: '눈동자의 흔들림이 없이 카메라 혹은 화면을 똑바로 응시했다.',
    },
  ],
  evaluationList3: [
    {
      id: 11,
      checkListTypeId: 2,
      text: '화면안에 얼굴이 다 들어간다.',
    },
    {
      id: 12,
      checkListTypeId: 2,
      text: '조명이 어둡지 않고 이목구비가 잘 보인다.',
    },
    {
      id: 13,
      checkListTypeId: 2,
      text: '목소리가 잘 들리며 주변의 소음이 크지 않다.',
    },
  ],
};

const flatEvaluation = Object.values(evaluation).flat();

export { evaluation, flatEvaluation };
