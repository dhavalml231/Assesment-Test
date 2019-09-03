import reducer from './reducer';
import { setNoOfRooms, updateRoomConfig } from './actions';

describe('reducer', () => {
    it('should set no of rooms properly', () => {
        const curState = {
            noOfRooms: 3,
            roomOccupancy: [
                { adult: 2, children: 1 },
                { adult: 2, children: 2 },
                { adult: 1, children: 0 },
                { adult: 1, children: 0 }
            ]
        };

        const nextState = reducer(curState, setNoOfRooms(1));
        expect(nextState.noOfRooms).toEqual(1);
        expect(nextState.roomOccupancy[1].adult).toEqual(1);
        expect(nextState.roomOccupancy[1].children).toEqual(0);
    });

    it('should set no of rooms properly', () => {
        const curState = {
            noOfRooms: 3,
            roomOccupancy: [
                { adult: 2, children: 1 },
                { adult: 2, children: 2 },
                { adult: 1, children: 0 },
                { adult: 1, children: 0 }
            ]
        };

        const nextState = reducer(curState, updateRoomConfig(1, { adult: 1, children: 0 }));
        expect(nextState.noOfRooms).toEqual(3);
        expect(nextState.roomOccupancy[0].adult).toEqual(1);
        expect(nextState.roomOccupancy[0].children).toEqual(0);
    });
})