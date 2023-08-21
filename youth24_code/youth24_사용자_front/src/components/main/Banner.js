import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BannerArea, BannerImgLink, BannerStyle } from 'style/StyleMain';
import { useState } from 'react';
import { useEffect } from 'react';

const Banner = () => {
  const settings = {
    dots: true,
    fade: false, // 페이드 효과 비활성화
    infinite: true,
    speed: 1500,
    slidesToShow: 1, // 한 번에 하나의 슬라이드만 보여줌
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000, // 5000으로 나중에 수정
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeListener);
  });

  return (
    <BannerArea>
      <BannerStyle {...settings} afterChange={() => {}}>
        <BannerImgLink to='/'>
          <img
            src={
              innerWidth > 700
                ? require('assets/images/banner_1.gif')
                : require('assets/images/mob_banner1.gif')
            }
            alt=''
          />
        </BannerImgLink>
        <BannerImgLink to='/login'>
          {' '}
          <img
            src={
              innerWidth > 700
                ? require('assets/images/banner_2.png')
                : require('assets/images/mob_banner2.png')
            }
            alt=''
          />
        </BannerImgLink>
      </BannerStyle>
    </BannerArea>
  );
};

export default Banner;
