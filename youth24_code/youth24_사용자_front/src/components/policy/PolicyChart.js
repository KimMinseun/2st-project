import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { PolicyChartArea } from 'style/StylePolicy';

const PolicyChart = ({ genderData, ageData }) => {
  const viewDetail = useSelector((state) => state.policy.viewDetail);
  // const genderOptions = {
  //   chart: {
  //     id: 'gender-chart',
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  //   xaxis: {
  //     axisBorder: { show: false },
  //     axisTicks: { show: false },
  //     categories: genderData.map((data) => data.name),
  //   },
  //   yaxis: {
  //     show: false,
  //   },
  //   colors: [
  //     function ({ dataPointIndex }) {
  //       if (dataPointIndex === 0) {
  //         return '#7E36AF';
  //       } else {
  //         return '#D9534F';
  //       }
  //     },
  //   ],
  // };

  const ageOptions = {
    chart: {
      id: 'age-chart',
      toolbar: {
        show: false,
      },
      height: '250px',
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ageData.map((data) => data.age),
    },
    colors: ['#584ee4'],
    scales: {
      yAxes: [
        {
          stepSize: 1,
        },
      ],
    },
  };

  // const genderSeries = [
  //   {
  //     name: '성별 분포',
  //     data: genderData.map((data) => data.value),
  //   },
  // ];

  const ageSeries = [
    {
      name: '나이별 분포',
      data: ageData.map((data) => data.count),
    },
  ];

  const manIcon = {
    height: `${
      (
        viewDetail.viewGendercntM /
        (viewDetail.viewGendercntM + viewDetail.viewGendercntF)
      ).toFixed(2) * 100
    }%`,
    backgroundColor: '#4d61ff',
  };
  const womanIcon = {
    height: `${
      (
        viewDetail.viewGendercntF /
        (viewDetail.viewGendercntM + viewDetail.viewGendercntF)
      ).toFixed(2) * 100
    }%`,
    backgroundColor: '#ff4d4d',
  };

  return (
    <PolicyChartArea>
      <div className='gender_box'>
        <div>
          <p>
            남성{' '}
            {viewDetail.viewGendercntM === 0 && viewDetail.viewGendercntF === 0
              ? '-'
              : Math.ceil(
                  (viewDetail.viewGendercntM /
                    (viewDetail.viewGendercntM + viewDetail.viewGendercntF)) *
                    100
                )}{' '}
            %
            <br />
            <span>
              ({viewDetail.viewGendercntM}
              명)
            </span>
          </p>
          <div>
            {/* <div
              style={{
                height: '70%',
                backgroundColor: '#4d61ff',
              }}
            ></div> */}
            <div style={manIcon}></div>

            <img src={require('assets/images/m.png')} alt='' />
          </div>
        </div>
        <div>
          <p>
            여성{' '}
            {viewDetail.viewGendercntM === 0 && viewDetail.viewGendercntF === 0
              ? '-'
              : Math.ceil(
                  (viewDetail.viewGendercntF /
                    (viewDetail.viewGendercntM + viewDetail.viewGendercntF)) *
                    100
                )}
            %
            <br />
            <span>({viewDetail.viewGendercntF}명)</span>
          </p>
          <div>
            {/* <div style={{ height: '30%', backgroundColor: '#ff4d4d' }}></div> */}
            <div style={womanIcon}></div>
            <img src={require('assets/images/f.png')} alt='' />
          </div>
        </div>
      </div>
      {/* <div
        style={{
          width: '100%',
          display: 'inline-block',
          boxSizing: 'border-box',
        }}
      >
        <Chart options={genderOptions} series={genderSeries} type='bar' />
      </div> */}
      <div className='age_box'>
        <Chart
          options={ageOptions}
          series={ageSeries}
          type='bar'
          height='280'
        />
      </div>
    </PolicyChartArea>
  );
};

export default PolicyChart;
