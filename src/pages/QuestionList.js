import React from 'react';
import styled from 'styled-components';

const StyledQuestionList = styled.div`
  color: black;
`;

const QuestionListContainer = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  padding-top: 30px;
  `;

const QuestionListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;

const QuestionListHeaderTitle = styled.div`
  font-size: 26px;
  font-weight: solid;
  padding-left: 20px;
  `;

const QuestionListHeaderAskQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: rgb(10, 149, 255);
  border-radius: 5px;
  font-size: 13px;
  color: white;
  `;

const QuestionListViewAndFilter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;

const QuestionListViewCount = styled.div`
  font-size: 18px;
  padding-left: 20px;
  `;

const QuestionListFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 13px;
  `;

const QuestionListNewestFilter = styled.div`
  margin-left: 10px;
  padding-right: 10px;
  border-right: 1px solid gray;
  `;

const QuestionListActiveFilter = styled.div`
  margin-right: 10px;
  padding-left: 10px;
  `;

const QuestionListBar = styled.div`
  margin-top: 14px;
  border-top: 1px solid gray;
  `;

const QuestionsContainer = styled.div`
  padding: 14px 0 14px 0;
  padding-left: 20px;
  border-bottom: 1px solid gray;
  `;

const QuestionVoteAnswerView = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: gray;
  gap: 10px;
  `;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  `;

const QuestionTitle = styled.div`
  color: blue;
  font-size: 18px;
  `;

const QuestionContent = styled.div`
  font-size: 14px;
`;

const QuestionTagsAndPostTime = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;

const QuestionTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
  height: 30px;
  border-radius: 5px;
  background-color: #e1ecf4;
  color: blue;
  `;

const QuestionPostTime = styled.div`
  font-size: 13px;
  color: gray;
  `;

const PagenationContainer = styled.div`
  margin: 80px 0 30px 0;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  gap: 10px;
  `;

const PagenationButton = styled.div`
  display: flex;
  gap: 10px;
  `;

const PagenationDots = styled.div`
  margin: 0 10px 0 10px;
  `;

const PagenationLastPageButton = styled.div`
  padding: 0 10px 0 10px;
  border: 1px solid gray;
  border-radius: 5px;
  `;

const PagenationNextPageButton = styled.div`
  padding: 0 10px 0 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const PagenationPerPage = styled.div`
  display: flex;
  flex-direction: row;
  `;

const PagenationPerPageButton = styled.div`
  display: flex;
  gap: 10px;
`;

const PagenationPerPageLetter = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;



// 질문 리스트 페이지
const QuestionList = () => {
  return (
    <StyledQuestionList>
      <QuestionListContainer>

        <QuestionListHeader>
          <QuestionListHeaderTitle>All Questions</QuestionListHeaderTitle> 
          <QuestionListHeaderAskQuestion>Ask Question</QuestionListHeaderAskQuestion> 
        </QuestionListHeader>

        <QuestionListViewAndFilter>
          <QuestionListViewCount>{} questions</QuestionListViewCount>
        
          <QuestionListFilterContainer>
            <QuestionListNewestFilter>
              <div>Newest</div>
            </QuestionListNewestFilter> 
            <QuestionListActiveFilter>
              <div>Active</div>
            </QuestionListActiveFilter> 
          </QuestionListFilterContainer>
        </QuestionListViewAndFilter> 

        <QuestionListBar>
          <QuestionsContainer>
            <QuestionVoteAnswerView>
              <div>{} votes</div>
              <div>{} answers</div>
              <div>{} views</div>
            </QuestionVoteAnswerView> 

            <Question>
              <QuestionTitle>{}This is title</QuestionTitle>
              <QuestionContent>{}Content is long</QuestionContent>
              
              <QuestionTagsAndPostTime>
                <QuestionTags>{}tag</QuestionTags>
                <QuestionPostTime>asked {} ago</QuestionPostTime> 
              </QuestionTagsAndPostTime>
            </Question> 

          </QuestionsContainer>
  
          <PagenationContainer>
            <PagenationButton>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </PagenationButton> 
            <PagenationDots>...</PagenationDots> 
            <PagenationLastPageButton>{}Last</PagenationLastPageButton> 
            <PagenationNextPageButton>{}Next</PagenationNextPageButton> 
            
            <PagenationPerPage>
              <PagenationPerPageButton>
                <span>15</span>
                <span>30</span>
                <span>50</span>
              </PagenationPerPageButton>
              <PagenationPerPageLetter>per page</PagenationPerPageLetter> 
            </PagenationPerPage>
          </PagenationContainer> 
        </QuestionListBar>
        
      </QuestionListContainer> 
    </StyledQuestionList>
  );
}

export default QuestionList;
