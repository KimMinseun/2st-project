import { useSelector } from 'react-redux';
import PolicyChart from './PolicyChart';

function PolicyChartView() {
  const viewDetail = useSelector((state) => state.policy.viewDetail);

  console.log(
    ('남',
    viewDetail.viewGendercntM /
      (viewDetail.viewGendercntM + viewDetail.viewGendercntF)).toFixed(2) * 100
  );

  console.log(
    ('여',
    viewDetail.viewGendercntF /
      (viewDetail.viewGendercntM + viewDetail.viewGendercntF)).toFixed(2) * 100
  );

  const genderData = [
    {
      name: '여성',
      value:
        (
          viewDetail.viewGendercntF /
          (viewDetail.viewGendercntM + viewDetail.viewGendercntF)
        ).toFixed(2) * 100,
    },
    {
      name: '남성',
      value:
        (
          viewDetail.viewGendercntM /
          (viewDetail.viewGendercntM + viewDetail.viewGendercntF)
        ).toFixed(2) * 100,
    },
  ];
  const ageData = [
    {
      age: '10대',
      count:
        (
          viewDetail.viewAgecnt10 /
          (viewDetail.viewAgecnt10 +
            viewDetail.viewAgecnt20 +
            viewDetail.viewAgecnt30 +
            viewDetail.viewAgecnt40 +
            viewDetail.viewAgecnt50 +
            viewDetail.viewAgecnt60)
        ).toFixed(2) * 100,
    },
    {
      age: '20대',
      count:
        (
          viewDetail.viewAgecnt20 /
          (viewDetail.viewAgecnt10 +
            viewDetail.viewAgecnt20 +
            viewDetail.viewAgecnt30 +
            viewDetail.viewAgecnt40 +
            viewDetail.viewAgecnt50 +
            viewDetail.viewAgecnt60)
        ).toFixed(2) * 100,
    },
    {
      age: '30대',
      count:
        (
          viewDetail.viewAgecnt30 /
          (viewDetail.viewAgecnt10 +
            viewDetail.viewAgecnt20 +
            viewDetail.viewAgecnt30 +
            viewDetail.viewAgecnt40 +
            viewDetail.viewAgecnt50 +
            viewDetail.viewAgecnt60)
        ).toFixed(2) * 100,
    },
    {
      age: '40대',
      count:
        (
          viewDetail.viewAgecnt40 /
          (viewDetail.viewAgecnt10 +
            viewDetail.viewAgecnt20 +
            viewDetail.viewAgecnt30 +
            viewDetail.viewAgecnt40 +
            viewDetail.viewAgecnt50 +
            viewDetail.viewAgecnt60)
        ).toFixed(2) * 100,
    },
    {
      age: '50대',
      count:
        (
          viewDetail.viewAgecnt50 /
          (viewDetail.viewAgecnt10 +
            viewDetail.viewAgecnt20 +
            viewDetail.viewAgecnt30 +
            viewDetail.viewAgecnt40 +
            viewDetail.viewAgecnt50 +
            viewDetail.viewAgecnt60)
        ).toFixed(2) * 100,
    },
    {
      age: '60대',
      count:
        (
          viewDetail.viewAgecnt60 /
          (viewDetail.viewAgecnt10 +
            viewDetail.viewAgecnt20 +
            viewDetail.viewAgecnt30 +
            viewDetail.viewAgecnt40 +
            viewDetail.viewAgecnt50 +
            viewDetail.viewAgecnt60)
        ).toFixed(2) * 100,
    },
  ];

  return <PolicyChart genderData={genderData} ageData={ageData} />;
}

export default PolicyChartView;
