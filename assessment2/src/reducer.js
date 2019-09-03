import { ACTION_TYPES } from './actions';

const defaultOccupancy = { adult: 1, children: 0 };
const LOCAL_STATE_NAME = "localState";

const localState = window.localStorage.getItem(LOCAL_STATE_NAME);

const initialState = !!localState ? JSON.parse(localState) : {
    noOfRooms: 1,
    roomOccupancy: [
        { ...defaultOccupancy },
        { ...defaultOccupancy },
        { ...defaultOccupancy },
        { ...defaultOccupancy }
    ]
}

export default function productReducer(state = { ...initialState }, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_NO_OF_ROOMS: {
            const { noOfRooms } = action.data;
            return {
                noOfRooms,
                roomOccupancy: state.roomOccupancy.map((curOccupancy, index) => index < noOfRooms ? curOccupancy : { ...defaultOccupancy })
            }
        }
        case ACTION_TYPES.UPDATE_ROOM_CONFIG: {
            const { roomNo, adult, children } = action.data;
            const updatedRoomOccupancy = [...state.roomOccupancy];
            updatedRoomOccupancy[roomNo - 1] = { adult, children };
            return {
                ...state,
                roomOccupancy: updatedRoomOccupancy
            }
        }
        case ACTION_TYPES.SAVE_DATA: {
            window.localStorage.setItem(LOCAL_STATE_NAME, JSON.stringify(state));
            return state;
        }
        default: {
            return state;
        }
    }
}