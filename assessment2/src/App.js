import React from 'react';
import styled from 'styled-components';
import RoomCard from './components/RoomCard';
import { connect } from 'react-redux';
import { saveData } from './actions';

const AppContainer = styled.div`
  margin:20px;
  font-family:arial,sans-serif;
  button{
    padding:10px;
    margin:12px;
  }
`;
const RoomCardContainer = styled.div`
display:flex;
`;
const App = ({ dispatch }) => {
  const onSave = () => dispatch(saveData());
  return <AppContainer>
    <RoomCardContainer>
      <RoomCard roomNo={1} />
      <RoomCard roomNo={2} />
      <RoomCard roomNo={3} />
      <RoomCard roomNo={4} />
    </RoomCardContainer>
    <button onClick={onSave}>Submit</button>
  </AppContainer>
}

export default connect()(App);
