var optionRight1 = {
    title: {
        text: '基站分布情况'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['中国','新加坡','美国','澳大利亚','非洲']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'中国'},
                {value:310, name:'新加坡'},
                {value:234, name:'美国'},
                {value:135, name:'澳大利亚'},
                {value:1548, name:'非洲'}
            ]
        }
    ]
};
var myChartRight1 = echarts.init(document.getElementById('right1'));
myChartRight1.setOption(optionRight1);


