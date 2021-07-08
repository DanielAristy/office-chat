export const SEND_MESSAGE = 'SEND_MESSAGE';

export function sendMessages(message) {
    return {
        type: SEND_MESSAGE,
        message
    }
}
