import React from 'react';
import styled from 'styled-components';
import ReviewRatings from './reviewRatings.jsx';
import UserReviews from './individualReviews.jsx';

const StyledModal = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0px;
  height: 99%;
`;

const XButtonContainer = styled.div`
  height: 10%;
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  margin-top: 30px;
`;
const XButton = styled.div`
  cursor: pointer;
  font-size: bold;
  display: block;
  top: 50%;
  position: absolute;
  margin-left: 25px;
`;

const View = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  height: 94%;
`;

const ModalHeader = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin: 0px 10px 10px 10px;
`;

const ModalReviewCategories = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  max-width: 1100px;
`;

const ModalUserReviews = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

const ModalView = styled.div`
font-size: 14px;
`;

const ModalApp = (props) => (
  <StyledModal>
    <XButtonContainer>
      <XButton onClick={props.onRequestClose}>X</XButton>
    </XButtonContainer>
    <View>
      <ModalReviewCategories>
        <ModalHeader>
          <div style={{ display: 'inline-block', color: 'red'}}>★</div> {props.totalAvg} ({props.totalReviews} reviews)
        </ModalHeader>
        <ModalView><ReviewRatings reviews={props.categoryReviews} /></ModalView>
      </ModalReviewCategories>
      <ModalUserReviews>
        <UserReviews reviews={props.userReviews}/>
      </ModalUserReviews>
    </View>
  </StyledModal>
);

export default ModalApp;