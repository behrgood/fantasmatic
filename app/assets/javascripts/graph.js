function qbChartLaunch(data) {
    $('#container1').highcharts({
        chart: {
            type: 'bar'
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
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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

function rbChartLaunch(data) {
    $('#container2').highcharts({
        chart: {
            type: 'bar'
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
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
            data: data.rush_attempts

        }, {
            name: 'Yards Per Carry',
            data: data.rush_avg

        }, {
            name: 'Yards',
            data: data.rush_yards

        }, {
            name: 'Touchdowns',
            data: data.rush_tds
          }, {
            name: 'RedZone Attempts',
            data: data.rdz_att
        }]
    });
}

function wrChartLaunch(data) {
    $('#container3').highcharts({
        chart: {
            type: 'bar'
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
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
            name: 'Targets',
            data: data.targets

        }, {
            name: 'Receptions',
            data: data.receptions

        }, {
            name: 'Yards',
            data: data.rec_yards

        }, {
            name: 'Touchdowns',
            data: data.rec_tds

        }, {
            name: 'RedZone Targets',
            data: data.rdz_tar
        }]
    });
}

function kChartLaunch(data) {
    $('#container4').highcharts({
        chart: {
            type: 'bar'
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
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
            name: 'FG Attempts',
            data: data.attempts

        }, {
            name: 'FG Made',
            data: data.made

        }, {
            name: 'Longest FG',
            data: data.fglong
        }]
    });
}
