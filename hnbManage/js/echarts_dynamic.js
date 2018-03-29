// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('right2'));

var data = [];
var now = +new Date(2001, 3, 1);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 3000; i++) {
    data.push(randomData());
}

option = {
    title: {
        text: '基站总体变化'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: true
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: true
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '200%'],
        splitLine: {
            show: true
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

setInterval(function () {

    for (var i = 0; i < 10; i++) {
        data.shift();
        data.push(randomData());
    }

    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 1000);