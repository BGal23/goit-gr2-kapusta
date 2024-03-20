import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  selectDataChart,
  selectReportsQuery,
  selectReports,
} from '../../../../redux/selector';
import { useSelector } from 'react-redux';

import scss from './ReportsTable.module.scss';
import { useRef } from 'react';
import { ChartDataDesktop, ChartOptionsDesktop } from './ChartOptions';
import { SortData, SortDataSubMenu } from './ChartUtils';
import PropTypes from 'prop-types';
Chart.register(...registerables);
Chart.register(ChartDataLabels);

export const ReportsTable = ({ onChange }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [check, setCheck] = useState(false);
  const [indexAxis, setIndexAxis] = useState('');
  const [innerWidth, setInnerWidth] = useState('');
  const [currentChart, setCurrentChart] = useState('income');

  const { reports } = useSelector(selectReports);

  let dataSubMenu = useSelector(selectDataChart);
  const divRef = useRef();
  const ref = useRef(null);
  const div2Ref = useRef();
  const reportsQuery = useSelector(selectReportsQuery);

  useEffect(() => {
    const resizeHandler = () => {
      setInnerWidth(getComputedStyle(div2Ref?.current).width);
      if (
        getComputedStyle(div2Ref?.current).width === '704px' &&
        indexAxis !== 'x'
      ) {
        setIndexAxis('x');
        setChartOptions(ChartOptionsDesktop('x'));
      }
      if (
        getComputedStyle(div2Ref?.current).width === '280px' &&
        indexAxis !== 'y'
      ) {
        setIndexAxis('y');
        setChartOptions(ChartOptionsDesktop('y'));
      }
    };

    window.addEventListener('resize', resizeHandler);

    if (indexAxis === '' && window.innerWidth >= 768) {
      setIndexAxis('x');
    } else if (indexAxis === '' && window.innerWidth < 768) {
      setIndexAxis('y');
    }

    return () => window.removeEventListener('resize', resizeHandler);
  }, [divRef, indexAxis]);

  useEffect(() => {
    if (
        (currentChart !== onChange && reports.length > 0) ||
        !reports
      ) {
      if (onChange === 'expenses') {
        const data = reports?.expenses?.expensesData;
        if (data && indexAxis !== '') {
          const info = SortData(data);
          setChartData(ChartDataDesktop(info.x, info.y, indexAxis));
          setChartOptions(ChartOptionsDesktop(indexAxis));
          setCurrentChart(onChange);
          setCheck(false);
        }
      } else if (onChange === 'income') {
        const data = reports?.incomes?.incomesData;
        if (data) {
          const info = SortData(data);
          setChartData(ChartDataDesktop(info.x, info.y, indexAxis));
          setChartOptions(ChartOptionsDesktop(indexAxis));
          setCurrentChart(onChange);
          setCheck(false);
        }
      }
    }
    return;
  }, [
    onChange,
    reports?.expenses?.expensesData,
    reports?.incomes?.incomesData,
    dataSubMenu,
    indexAxis,
    reports,
    currentChart,
    reportsQuery,
  ]);

  useEffect(() => {
    if (dataSubMenu.length <= 0 && check) {
      return;
    }
    if (dataSubMenu.length > 0) {
      const info = SortDataSubMenu(dataSubMenu);

      if (
        JSON.stringify(chartData?.datasets[0]?.data) !== JSON.stringify(info.y) ||
        JSON.stringify(chartData?.labels) !== JSON.stringify(info.x)
      ) {
        setCheck(true);
        setChartOptions(ChartOptionsDesktop(indexAxis));
        setChartData(ChartDataDesktop(info.x, info.y, indexAxis));
      } else {
        return;
      }
    }
  }, [dataSubMenu, check, chartData?.datasets, chartData?.labels, indexAxis]);

  useEffect(() => {
    const el2 = ref.current;
    if (indexAxis === 'y') {
      el2.resize(280, 480);
    }
  }, [chartData, innerWidth, indexAxis]);

  return (
    <div className={scss.boxPadding} ref={div2Ref}>
      <div className={scss.boxChart} ref={divRef}>
        <Bar
          ref={ref}
          id="my-chart"
          style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
          data={chartData}
          options={chartOptions}
        />
      </div>
    </div>
  );
};
ReportsTable.propTypes = {
    onChange: PropTypes.oneOf(['expenses', 'income']).isRequired,
  };