import { useState } from 'react';
import Chart from 'react-apexcharts';
import ScrollAnimation from 'react-animate-on-scroll';

const StatisticsChart = (props) => {
    const {title, subTitle} = props;

    const [chartData] = useState({
        series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9]
        }],
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#dc4135'],
            stroke: {
                show: true,
                curve: 'smooth',
                width: 3
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
    });

    return(
        <>
            <div className="col-12 my-2">
                <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h5 className="mb-2">
                                        {title}
                                    </h5>
                                    <span>
                                        {subTitle}
                                    </span>
                                </div>

                                <Chart 
                                    className="ms-auto" 
                                    options={chartData.options} 
                                    series={chartData.series} 
                                    type="line" 
                                    width={100} 
                                    height={42}
                                />
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

export default StatisticsChart;