import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { boardActions } from 'reduxs/actions/board_action';
import { PaginationArea } from 'style/StyleLayout';
import { QnaBody, QnaHeader, QnaWriteBtn } from 'style/StyleQna';

const List = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { currentPage } = useParams();

  const boardList = useSelector((state) => state.board.boardList);
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  ); // 값이 있으면 state.board.pv 이걸로, 없으면 1페이지를 가져 오도록

  const getBoardList = (currentPage) => {
    dispatch(boardActions.getBoardList(currentPage));
    navigator(`/qna/list/${currentPage}`);
  };

  //페이징 처리
  const pageNumbers = [];
  if (pv.totalPage <= 5) {
    for (let i = 1; i <= pv.totalPage; i++) {
      pageNumbers.push(i);
    }
  } else if (pv.currentPage < 4) {
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
  } else if (pv.currentPage >= pv.totalPage - 2) {
    for (let i = pv.totalPage - 4; i <= pv.totalPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = pv.currentPage - 2; i <= pv.currentPage + 2; i++) {
      pageNumbers.push(i);
    }
  }

  useEffect(() => {
    getBoardList(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <QnaWriteBtn>
        {localStorage.getItem('userId') === null ? (
          <>
            <p>로그인 후 게시글 작성이 가능합니다.</p>
          </>
        ) : (
          <>
            <p>청년24에 문의사항을 작성하시겠습니까?</p>
            <NavLink to='/qna/write'>글쓰기</NavLink>
          </>
        )}
      </QnaWriteBtn>

      <QnaHeader>
        <li>No.</li>
        <li></li>
        <li>제목</li>
        <li>작성자</li>
        <li>조회수</li>
      </QnaHeader>

      {boardList &&
        boardList.map((board) => {
          return (
            <QnaBody board={board} key={board.qnaKeynum}>
              <li>
                <p
                  className={
                    board.qnaStatus === 1 && board.qnaSecret === 0
                      ? ''
                      : board.qnaStatus === 1 && board.qnaSecret === 1
                      ? 'lock'
                      : board.qnaStatus === 2 && board.qnaSecret === 0
                      ? 'ok'
                      : 'ok lock'
                  }
                >
                  <span>{board.qnaKeynum}</span>
                  <span>
                    {board.qnaStatus === 2 ? '[답변완료]' : '[답변대기]'}
                  </span>
                  <span>
                    {board.qnaSecret === 1 &&
                    localStorage.getItem('userId') === board.userId ? (
                      <NavLink to={`/qna/view/${board.qnaKeynum}`}>
                        {board.qnaTitle}
                      </NavLink>
                    ) : board.qnaSecret === 1 &&
                      localStorage.getItem('userId') !== board.userId ? (
                      <NavLink
                        to={`/qna/view/${board.qnaKeynum}`}
                        onClick={(e) => e.preventDefault()}
                      >
                        {board.qnaTitle}
                      </NavLink>
                    ) : board.qnaSecret === 0 &&
                      localStorage.getItem('userId') !== board.userId ? (
                      <NavLink to={`/qna/view/${board.qnaKeynum}`}>
                        {board.qnaTitle}
                      </NavLink>
                    ) : (
                      <NavLink to={`/qna/view/${board.qnaKeynum}`}>
                        {board.qnaTitle}
                      </NavLink>
                    )}
                  </span>
                  <span>
                    {board.userId !== null
                      ? board.userId.length / 2 === 0
                        ? board.userId.substr(0, board.userId.length / 2 + 1) +
                          '*'.repeat(board.userId.length / 2 + 1)
                        : board.userId.substr(0, board.userId.length / 2) +
                          '*'.repeat(board.userId.length / 2)
                      : null}
                  </span>
                  <span>{board.qnaReadcount}</span>
                </p>
              </li>
            </QnaBody>
          );
        })}
      {pv.blockCount === undefined ? null : (
        <PaginationArea>
          <ul>
            <li>
              <div
                onClick={async () => getBoardList(1)}
                className={
                  pv.currentPage === 1 ? 'pagebtn disabled' : 'pagebtn'
                }
              >
                &lt; &lt;
              </div>
            </li>
            <li>
              <div
                onClick={async () => getBoardList(pv.currentPage - 1)}
                className={
                  pv.currentPage === 1 ? 'pagebtn disabled' : 'pagebtn'
                }
              >
                &lt;
              </div>
            </li>
            {/* 페이지 이동하는 것 구현 */}
            {pageNumbers.map((pnum, idx) => (
              <li
                aria-current={pv.currentPage === pnum ? 'page' : null}
                key={pnum} //반복되어 수행되는 부분이기에 key값 줌
              >
                <div
                  className={pv.currentPage === pnum ? 'activePage' : null}
                  aria-current={pv.currentPage === pnum ? 'activePage' : null}
                  onClick={async () => getBoardList(pnum)}
                >
                  {pnum}
                </div>
              </li>
            ))}
            <li>
              <div
                onClick={async () => getBoardList(pv.currentPage + 1)}
                className={
                  pv.currentPage === pv.totalPage
                    ? 'pagebtn disabled'
                    : 'pagebtn'
                }
              >
                &gt;
              </div>
            </li>
            <li>
              <div
                onClick={async () => getBoardList(pv.totalPage)}
                className={
                  pv.currentPage === pv.totalPage
                    ? 'pagebtn disabled'
                    : 'pagebtn'
                }
              >
                &gt; &gt;
              </div>
            </li>
          </ul>
        </PaginationArea>
      )}
    </>
  );
};

export default List;
