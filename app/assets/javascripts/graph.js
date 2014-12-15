function chartLaunch() {
    var data = {
        title: 'Rushing Leaders',
        subtitle: 'RB - Week 14',
        categories: [
            'Jeremy Hill',
            'Arian Foster',
            'Eddie Lacy',
            'Doug Martin',
            'Marshawn Lynch',
            'CJ Anderson',
            'DeMarco Murray',
            'Giovani Bernard',
            'Kerwynn Williams',
            'Jonathon Stewart'
        ],
        rush_attempts: [1, 2, 3, 4, 5, 85, 81, 79, 75, 73]
    }
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
            data: data.rush_attempts

        }, {
            name: 'Yards',
            data: [148, 99, 97, 96, 91, 85, 81, 79, 75, 73]

        }, {
            name: 'Touchdowns',
            data: [2, 0, 1, 0, 1, 0, 2, 0, 0, 0]

        }, {
            name: 'Fantasy Points',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1]

        }]
    });
}
