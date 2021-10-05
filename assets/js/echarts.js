var myChart1 = echarts.init(document.getElementById('gauge-multi-title'));


        var option1 = {


            series: [{


                type: 'gauge',
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 18,
                    itemStyle: {
                        color: '#FFFFFF'
                    }
                },
                pointer: {

                    icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                    width: 8,
                    length: '80%',
                    offsetCenter: [0, '8%']
                },

                progress: {
                    show: true,
                    overlap: true,
                    roundCap: true
                },
                axisLine: {

                    roundCap: true
                },
                data: [{


                // First 
                    value: 20,
                    name: '優秀率',
                    title: {
                        offsetCenter: ['-40%', '80%']
                    },
                     itemStyle: {
                color: '#89AE26'},
                    detail: {
                        offsetCenter: ['-40%', '95%'],
                        backgroundColor: '#89AE26',
                    }
                },
                
                // Second 
                {
            value: 40,
            name: '完成率',
            title: {
                offsetCenter: ['0%', '80%']
            },
             itemStyle: {
                color: '#F39518'},
            detail: {
                offsetCenter: ['0%', '95%'],
                 backgroundColor: '#F39518',
            }
        },

                // Third

                {value: 60,
                   name: '達標率',
                    title: {
                        offsetCenter: ['40%', '80%']
                    },
                    itemStyle: {
                color: '#6A317A'},
                    detail: {
                        offsetCenter: ['40%', '95%'],
                        backgroundColor: '#6A317A',

                    },

                }
              ],
                title: {
                    fontSize: 14
                },
                detail: {
                     width: 40,
            height: 14,
            fontSize: 14,
            color: '#fff',
            backgroundColor: 'auto',

                    borderRadius: 3,
                    formatter: '{value}%'
                }
            }]
        };

        setInterval(function () {
            option1.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            option1.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
            option1.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
            myChart1.setOption(option1, true);
        }, 3000);

        myChart1.setOption(option1);
