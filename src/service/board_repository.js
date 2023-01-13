import { firebaseDatabase } from "./firebase";

class BoardRepository {
  syncBoards(onUpdate) {
    const ref = firebaseDatabase.ref(`boards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  getBoards(boardId, onUpdate) {
    const ref = firebaseDatabase.ref(`boards/${boardId}`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveBoard(board) {
    firebaseDatabase.ref(`boards/${board.id}`).set(board);
  }

  removeBoard(board) {
    firebaseDatabase.ref(`boards/${board.id}`).remove();
  }
}

export default BoardRepository;
