import { WORD_DECIMETER } from '../constants';

export const messageToArrayOfWords = ( message ) => {
  // the filter discards the empty strings that might get returned by split()
  return message.trim().match( WORD_DECIMETER );
};
