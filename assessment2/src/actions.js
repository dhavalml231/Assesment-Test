export const ACTION_TYPES = {
    SET_NO_OF_ROOMS: 'set_no_of_rooms',
    UPDATE_ROOM_CONFIG: 'update_room_config',
    SAVE_DATA: 'save_data'
}

export function setNoOfRooms(noOfRooms) {
    return {
        type: ACTION_TYPES.SET_NO_OF_ROOMS,
        data: { noOfRooms }
    }
}

export function updateRoomConfig(roomNo, { adult = 0, children = 0 }) {
    return {
        type: ACTION_TYPES.UPDATE_ROOM_CONFIG,
        data: { roomNo, adult, children }
    }
}

export function saveData() {
    return {
        type: ACTION_TYPES.SAVE_DATA
    }
}