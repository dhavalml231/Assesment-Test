import React from "react";
import { create } from "react-test-renderer";
import { RoomCard } from './RoomCard';

describe('Roomcard', () => {
    it('should render first room properly', () => {
        const room = create(<RoomCard roomNo={1} noOfRooms={1} />);
        expect(room.toJSON()).toMatchSnapshot();
    });

    it('should render disabled room properly', () => {
        const room = create(<RoomCard roomNo={3} noOfRooms={1} />);
        expect(room.toJSON()).toMatchSnapshot();
    });

    it('should render non-first enabled room properly', () => {
        const room = create(<RoomCard roomNo={2} noOfRooms={4} />);
        expect(room.toJSON()).toMatchSnapshot();
    });
})