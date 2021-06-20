import React from 'react';

import AnswerBox from './AnswerBox';

export default {
  title: 'Organisms/Answer Box',
  component: AnswerBox,
};

const answer = `안녕하십니까!
플러스엑스 예비 UX 디자이너
홍길동 인사드립니다. 저는 배우는 속도가
빨라 어디서든 항상 환영 받는 일꾼 역할을
해왔습니다. 시각 디자인 전공 지식과
성실함을 바탕으로 플러스엑스 UX팀에서도
한 사람 이상의 역할을 꼭 해내고자 합니다.

제 신념은 제가 있는 자리를 플러스가
되도록 적극적으로 생활한다는 것입니다.
이러한 신념으로 귀사의 발전에 기여할 수
있는 작은 일원으로서 배우는 자세로 항상
열심히 노력할 것입니다. 또한 제 자신이

제 신념은 제가 있는 자리를 플러스가
되도록 적극적으로 생활한다는 것입니다.
이러한 신념으로 귀사의 발전에 기여할 수
있는 작은 일원으로서 배우는 자세로 항상
열심히 노력할 것입니다. 또한 제 자신이
`;

export const answerBox = () => <AnswerBox height={590} answer={answer} />;
