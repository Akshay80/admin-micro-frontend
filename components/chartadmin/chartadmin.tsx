/* eslint-disable */
"use client"
import { useState, useEffect } from 'react';
import styles from './chartadmin.module.css';
import dynamic from 'next/dynamic'
import { client } from '../layout/layout';

export interface ChartProps { }

export function Chartadmin(props: ChartProps) {
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);

  const [startDate, setStartDate] = useState<any>(new Date(oneMonthAgo));
  const [endDate, setEndDate] = useState<any>(new Date());

  const [filterType, setFilterType] = useState<any>("Orders");
  const [timeFrame, setTimeFrame] = useState<any>("");

  const [searchParam, setSearchParam] = useState<any>("order");

  const [dates, setDates] = useState<any>([]);
  const [chartData, setChartData] = useState<any>([]);
  const [backup, setBackUp] = useState<any>([]);




  


  let apexData: any = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: chartData.map((item: any) => item.date)
      }
    },
    series: [
      {
        name: "series-1",
        data: chartData.map((item: any) => item.count)
      }
    ]
  };
  let doughnutData: any = {
    options: {
      labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"],
      colors: ['#F44336', '#E91E63', '#9C27B0', '#2196F3', '#4CAF50'],
      legend: {
        show: true,
        position: 'bottom'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
    series: [44, 55, 13, 43, 22] // Replace this with your actual data
  };

  const [selectedOption, setSelectedOption] = useState<string>('Seller');

  function getDaysRange() {
    setTimeFrame("Daily");
    const dateStrings = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      const day = ("0" + currentDate.getDate()).slice(-2);
      const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
      const year = currentDate.getFullYear().toString().substr(-2);
      dateStrings.push(`${day}-${month}-${year}`);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setDates(dateStrings);
  }

  function initialRange() {
    setTimeFrame("Daily");
    let dateArray = [];

    for (let i = 30; i >= 0; i--) {
      let date = new Date();
      date.setDate(date.getDate() - i);
      let day = ("0" + date.getDate()).slice(-2);
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let year = date.getFullYear().toString().substr(-2);
      let formattedDate = `${day}-${month}-${year}`;
      dateArray.push(formattedDate);
    }

    setDates(dateArray);
  }

  function getData() {
    let dateArray: any = [];
    for (let i = 30; i >= 0; i--) {
      let date = new Date();
      date.setDate(date.getDate() - i);
      let day = ("0" + date.getDate()).slice(-2);
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let year = date.getFullYear().toString().substr(-2);
      let formattedDate = `${day}-${month}-${year}`;
      dateArray.push(formattedDate);
    }

    client
      .initIndex(searchParam)
      .search("", {
        numericFilters: [
          `modified_createdAt >= ${Math.floor(Date.parse(startDate) / 1000)}`,
          `modified_createdAt <= ${Math.floor(Date.parse(endDate) / 1000)}`,
        ],
      })
      .then((res: any) => {
        let data = res.hits;
        if (filterType === "Cancelled Orders")
          data = res.hits.filter((item: any) => item.orderStatus === "CANCELLED");
        const ordersByDay = data?.reduce((acc: any, order: any) => {
          const dateStr = order.createdAt.slice(0, 10);
          const date = new Date(dateStr);
          const formattedDate = date
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            })
            .replace(/\//g, "-");

          if (acc[formattedDate]) {
            acc[formattedDate]++;
          } else {
            acc[formattedDate] = 1;
          }
          return acc;
        }, {});

        if (dates.length !== 0) {
          dates.forEach((date: any) => {
            if (!ordersByDay[date]) {
              ordersByDay[date] = 0;
            }
          });
        } else {
          dateArray.forEach((date: any) => {
            if (!ordersByDay[date]) {
              ordersByDay[date] = 0;
            }
          });
        }

        let ordersByDayArr = Object.keys(ordersByDay).map((dateStr) => ({
          date: dateStr,
          count: ordersByDay[dateStr],
        }));
        let x = ordersByDayArr.sort((a, b) => {
          const dateA: any = new Date(`20${a.date.split("-").reverse().join("-")}`);
          const dateB: any = new Date(`20${b.date.split("-").reverse().join("-")}`);
          return dateA - dateB;
        });
        setChartData(x);
        setBackUp(x);
      }).catch(e => console.log(e))
  }

  function getDataByWeek() {
    setTimeFrame("Week");
    const result = [];
    const data = backup;

    for (let i = 0; i < data.length; i += 7) {
      let count = 0;
      const startDateStr = data[i].date;
      const startDate = new Date(
        `20${startDateStr.slice(-2)}-${startDateStr.slice(
          3,
          5
        )}-${startDateStr.slice(0, 2)}`
      );

      for (let j = i; j < i + 7 && j < data.length; j++) {
        count += data[j].count;
      }

      result.push({ date: startDate.toISOString().slice(0, 10), count });
    }

    setChartData(result);
  }

  function getDataByMonth() {
    setTimeFrame("Month");
    const result = [];
    let data = backup;
    for (let i = 0; i < data.length; i++) {
      const currentDateStr = data[i].date;
      const currentDate = new Date(
        `20${currentDateStr.slice(-2)}-${currentDateStr.slice(
          3,
          5
        )}-${currentDateStr.slice(0, 2)}`
      );
      const currentMonth = currentDate.toLocaleString("default", {
        month: "long",
      });
      let count = data[i].count;

      // Check if the month exists in the result array
      const monthIndex = result.findIndex((item) => item.date === currentMonth);
      if (monthIndex !== -1) {
        result[monthIndex].count += count;
      } else {
        result.push({ date: currentMonth, count });
      }
    }
    setChartData(result);
  }

  function getDataByYear() {
    setTimeFrame("Year");
    const yearData: any = {};
    let data = backup;
    data.forEach((item: any) => {
      const year = item.date.split("-")[2];
      if (yearData[year]) {
        yearData[year].count += item.count;
      } else {
        yearData[year] = { date: year, count: item.count };
      }
    });

    const result = Object.values(yearData);
    setChartData(result);
  }

  useEffect(() => {
    initialRange();
  }, []);

  useEffect(() => {
    getData();
  }, [searchParam, dates, filterType]);



  return (
    <div className={styles['container']}>
      <div className="row">
        <div className="col-xl-8 col-lg-6 col-md-12 col-12 mb-6">
          <div className="card h-100 card-lg">
            <div className="card-body p-6">
              <div className="d-flex justify-content-between">
                <div>
                  <h3 className="mb-1 fs-5">{filterType} </h3>
                  <small>(+63%) than last year)</small>
                </div>
                <div>
                  {/* select option */}
                  <select className="form-select " onChange={(e) => {
                    setFilterType(e.target.value);
                    e.target.value === "Products" && setSearchParam("product");
                    e.target.value === "Orders" && setSearchParam("order");
                    e.target.value === "Seller" && setSearchParam("seller");
                  }}>
                    <option value="Orders">Orders</option>
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Products">Products</option>
                    <option value="Earnings">Earnings</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
              </div>
              <div className='d-flex mt-4'>
                <button className='btn btn-primary me-3' onClick={getDaysRange}>Daily</button>
                <button className='btn btn-primary me-3' onClick={getDataByWeek}>Weekly</button>
                <button className='btn btn-primary me-3' onClick={getDataByMonth}>Monthly</button>
                <button className='btn btn-primary me-3' onClick={getDataByYear}>Yearly</button>
              </div>
              {/* <Chart
                options={apexData.options}
                series={apexData.series}
                type="line"
                width="100%"
                className="mt-5" /> */}
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-12 mb-6">
          <div className="card h-100 card-lg">
            <div className="card-body p-6">
              <h3 className="mb-0 fs-5">Total Sales </h3>
              {/* <Chart
                options={doughnutData.options}
                series={doughnutData.series}
                type="donut"
                width="100%"
                height={600}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chartadmin;
