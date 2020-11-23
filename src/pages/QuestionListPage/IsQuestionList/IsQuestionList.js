import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionCardView from '../../../components/QuestionCardView'; 
import { getQuestionItemAPI } from '../../../repository/questionListRepository';

export default function IsQuestionList({ questionList }) {
    const [count, setCount] = useState(0);
    return (
        <>
            {questionList.map(val=>{
                getQuestionItemAPI(JSON.stringify(val.id).replace(/\"/g, '')).then((response)=>{
                    alert(response);
                })
                //return <QuestionCardView />
            })}
        </>
    )
}