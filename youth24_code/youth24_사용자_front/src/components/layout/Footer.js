import { FooterArea } from 'style/StyleLayout';

const Footer = () => {
  return (
    <>
      <FooterArea className='footer_area'>
        <article className='inner'>
          <p>
            (12345) 서울특별시 강남구 청년로 24 청년24
            <br />
            <span>전화번호 : 02-0000-0000</span>
            <span>팩스번호:02-0000-0000</span>
          </p>
          <p>COPYRIGHT (C) 청년24. ALL RIGHTS RESERVED.</p>
        </article>
      </FooterArea>
    </>
  );
};

export default Footer;
