import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { boardActions } from '../../reduxs/actions/board_action';

const BoardWrite = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    qnaTitle: '',
    qnaContent: '',
  });

  const [qnaSecret, setQnaSecret] = useState(0);

  const { qnaTitle, qnaContent } = inputs;

  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  );

  const handleValueChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const checkOnlyOne = (id) => {
    // console.log('id', id);
    let checkPick = document.getElementsByName('qnaSecret');
    Array.prototype.forEach.call(checkPick, function (el) {
      // console.log('el', el);
      el.checked = false;
    });
    id.target.checked = true;
    setQnaSecret(id.target.defaultValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('qnaTitle', qnaTitle);
    formData.append('qnaContent', qnaContent);
    formData.append('qnaSecret', qnaSecret);
    console.log('qnaSecret', qnaSecret);
    formData.append('userId', localStorage.getItem('userId'));
    await dispatch(boardActions.getBoardWrite(formData));

    setInputs({
      qnaTitle: '',
      qnaContent: '',
      qnaSecret: '',
    });
    alert('글 등록완료');
    navigator(
      `/qna/list/${pv.currentPage ? pv.currentPage : { currentPage: 1 }}`
    );
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td width='20%' align='center'>
                글쓴이
              </td>
              <td>
                <input
                  type='text'
                  readOnly
                  value={
                    localStorage.getItem('userId') !== null &&
                    localStorage.getItem('userId') !== undefined
                      ? localStorage.getItem('userId').length / 2 === 0
                        ? localStorage
                            .getItem('userId')
                            .substr(
                              0,
                              localStorage.getItem('userId').length / 2 + 1
                            ) +
                          '*'.repeat(
                            localStorage.getItem('userId').length / 2 + 1
                          )
                        : localStorage
                            .getItem('userId')
                            .substr(
                              0,
                              localStorage.getItem('userId').length / 2
                            ) +
                          '*'.repeat(localStorage.getItem('userId').length / 2)
                      : null
                  }
                  name='userId'
                />
              </td>
            </tr>
            <tr>
              <td width='20%' align='center'>
                제목
              </td>
              <td>
                <input
                  type='text'
                  name='qnaTitle'
                  size='40'
                  value={qnaTitle}
                  placeholder='제목을 적어주세요'
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                내용
              </td>
              <td>
                <textarea
                  name='qnaContent'
                  rows='13'
                  cols='40'
                  placeholder='내용을 적어주세요'
                  value={qnaContent}
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td width='20%' align='center'>
                비밀글 여부
              </td>
              <td>
                <input
                  type='checkbox'
                  id='공개글'
                  name='qnaSecret'
                  value='0'
                  defaultChecked
                  onChange={(e) => {
                    checkOnlyOne(e);
                  }}
                />
                공개글
                <input
                  type='checkbox'
                  id='비밀글'
                  name='qnaSecret'
                  value='1'
                  onChange={(e) => {
                    checkOnlyOne(e);
                  }}
                />
                비밀글
              </td>
            </tr>
          </tbody>
        </table>
        <Link className='btn btn-primary' to={`/qna/list/${pv.currentPage}`}>
          리스트
        </Link>
        <input type='submit' className='btn btn-primary' value='등록' />
      </form>
    </>
  );
};

export default BoardWrite;
