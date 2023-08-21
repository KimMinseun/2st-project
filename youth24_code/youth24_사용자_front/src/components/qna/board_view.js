import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { boardActions } from '../../reduxs/actions/board_action';
import { QnaViewArea } from 'style/StyleQna';

const BoardView = () => {
  const { qnaKeynum } = useParams();
  const dispatch = useDispatch();

  const boardDetail = useSelector((state) => state.board.boardDetail);
  //   const boardFile = useSelector((state) => state.board.boardFile);

  const boardAdminDetail = useSelector((state) => state.board.boardAdminDetail);
  const pv = useSelector((state) => state.board.pv);

  useEffect(() => {
    dispatch(boardActions.getBoardDetail(qnaKeynum));
    dispatch(boardActions.getBoardAdminDetail(qnaKeynum));
  }, [dispatch, qnaKeynum]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(boardActions.getBoardDelete(qnaKeynum));
    alert('삭제완료하였습니다');
    window.location.replace(`/qna/list/${pv.currentPage}`);
  };

  return (
    <>
      <QnaViewArea>
        <div className='inner'>
          <h2>질문·답변 › 상세</h2>
          <h4 className={boardDetail.qnaSecret === 0 ? '' : 'lock'}>
            {boardDetail.qnaTitle}
            {/* {boardDetail.qnaSecret === 1 ? '비밀글' : '공개글'} */}
            <span>
              작성자&nbsp;:&nbsp;
              {boardDetail.userId !== null && boardDetail.userId !== undefined
                ? boardDetail.userId.length / 2 === 0
                  ? boardDetail.userId.substr(
                      0,
                      boardDetail.userId.length / 2 + 1
                    ) + '*'.repeat(boardDetail.userId.length / 2 + 1)
                  : boardDetail.userId.substr(
                      0,
                      boardDetail.userId.length / 2
                    ) + '*'.repeat(boardDetail.userId.length / 2)
                : null}
              &nbsp;&nbsp;·&nbsp;&nbsp;조회수&nbsp;:&nbsp;
              {boardDetail.qnaReadcount}
            </span>
          </h4>
          <p className='qna_cont'>{boardDetail.qnaContent}</p>
          <div className='qna_btn_area'>
            <Link
              className='btn btn-primary'
              to={`/qna/list/${pv.currentPage}`}
            >
              리스트
            </Link>
            {localStorage.getItem('userId') === boardDetail.userId ? (
              <Link to={`/qna/update/${qnaKeynum}`}>수정</Link>
            ) : null}
            {localStorage.getItem('userId') === boardDetail.userId ? (
              <Link onClick={handleDelete}>삭제</Link>
            ) : null}
          </div>

          {boardAdminDetail.qnaContent !== null && (
            <>
              <p className='qna_cont'>{boardAdminDetail.qnaContent}</p>
            </>
          )}
        </div>
      </QnaViewArea>
    </>
  );
};

export default BoardView;
