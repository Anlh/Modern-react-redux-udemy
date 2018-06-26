/**
 * @description Select book is an ActionCreator
 * @param book
 * @returns {{type: string, payload: 'book'}} an action
 */
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book // More information about the action
    };
}