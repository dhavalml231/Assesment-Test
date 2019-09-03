import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateRoomConfig, setNoOfRooms } from '../actions'

const RoomCardRoot = styled.div`
    margin: 10px;
    width: 180px;
    height: 150px;
    border: 3px solid #e0e0e0;
    border-radius: 10px;
    overflow:hidden;
    div.title{
        background-color: #e0e0e0;
        line-height: 30px;
        height: 30px;
        padding-left: 5px;
        font-weight: 600;
        font-size: 14px;
        display:grid;
        grid-template-columns:20px auto;
    }
    &.disabled{
        border: 3px solid #9fa8da;
        background-color: #c5cae9;
        div.title{
            background-color:inherit;
        }
    }
`;
const Content = styled.div`
    height: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 11px;
    align-items: center;
    width: 140px;
    margin: 0 auto;
    font-size: 15px;
    font-weight: 100;
`;
export const RoomCard = ({ roomNo, noOfRooms, occupancy = {}, dispatch }) => {

    const disabled = roomNo > noOfRooms;
    const cardClassName = classNames({ 'disabled': disabled });
    const checkBoxId = `${roomNo}_chkBox`;

    const checked = roomNo <= noOfRooms;
    const { adult = 1, children = 0 } = occupancy;

    const onChangeOccupancy = event => dispatch(
        updateRoomConfig(roomNo, { ...occupancy, [event.target.name]: event.target.value })
    );
    const onSelectRoom = event => {
        const checked = event.target.checked;
        if (checked) {
            dispatch(setNoOfRooms(roomNo));
        } else {
            dispatch(setNoOfRooms(roomNo - 1))
        }
    }
    return <RoomCardRoot className={cardClassName}>
        <div className="title">
            <div>
                {roomNo !== 1 && <input type="checkbox" id={checkBoxId} value={roomNo} checked={checked} onChange={onSelectRoom} />}
            </div>
            <label htmlFor={checkBoxId}>Room {roomNo}</label>
        </div>
        <Content>
            <p>Adults (18+)</p>
            <p>Children (0-17)</p>
            <select name="adult" onChange={onChangeOccupancy} value={adult} disabled={disabled}>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
            <select name="children" onChange={onChangeOccupancy} value={children} disabled={disabled}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
        </Content>
    </RoomCardRoot>
}

const mapStateToProps = ({ noOfRooms, roomOccupancy }, { roomNo }) => ({
    noOfRooms,
    occupancy: roomOccupancy[roomNo - 1]
})
export default connect(mapStateToProps)(RoomCard);