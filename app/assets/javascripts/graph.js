function chartLaunch(data) {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: data.title
        },
        subtitle: {
            text: data.subtitle
        },
        xAxis: {
            categories: data.categories
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Statistical Data'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Attempts',
            data: data.pass_attempts

        }, {
            name: 'Completions',
            data: data.pass_completions

        }, {
            name: 'Yards',
            data: data.pass_yards

        }, {
            name: 'Touchdowns',
            data: data.pass_tds
        }]
    });
}
