-$(document).ready(function() {
    (function($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function(g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });
    })(jQuery);
});

function getQbData() {
    // performs ajax call.
    $.ajax({
        url: '/api_call',
        type: 'GET',
        success: function(data) {
            var ajaxResult = {
                season: 2014,
                week: 15,
                passing: [{
                    name: data.leaders.passing.player[0].name,
                    attempts: parseInt(data.leaders.passing.player[0].att),
                    completions: parseInt(data.leaders.passing.player[0].cmp),
                    yards: parseInt(data.leaders.passing.player[0].yds),
                    touchdowns: parseInt(data.leaders.passing.player[0].td)
                }, {
                    name: data.leaders.passing.player[1].name,
                    attempts: parseInt(data.leaders.passing.player[1].att),
                    completions: parseInt(data.leaders.passing.player[1].cmp),
                    yards: parseInt(data.leaders.passing.player[1].yds),
                    touchdowns: parseInt(data.leaders.passing.player[1].td)
                }, {
                    name: data.leaders.passing.player[2].name,
                    attempts: parseInt(data.leaders.passing.player[2].att),
                    completions: parseInt(data.leaders.passing.player[2].cmp),
                    yards: parseInt(data.leaders.passing.player[2].yds),
                    touchdowns: parseInt(data.leaders.passing.player[2].td)
                }, {
                    name: data.leaders.passing.player[3].name,
                    attempts: parseInt(data.leaders.passing.player[3].att),
                    completions: parseInt(data.leaders.passing.player[3].cmp),
                    yards: parseInt(data.leaders.passing.player[3].yds),
                    touchdowns: parseInt(data.leaders.passing.player[3].td)
                }, {
                    name: data.leaders.passing.player[4].name,
                    attempts: parseInt(data.leaders.passing.player[4].att),
                    completions: parseInt(data.leaders.passing.player[4].cmp),
                    yards: parseInt(data.leaders.passing.player[4].yds),
                    touchdowns: parseInt(data.leaders.passing.player[4].td)
                }, {
                    name: data.leaders.passing.player[5].name,
                    attempts: parseInt(data.leaders.passing.player[5].att),
                    completions: parseInt(data.leaders.passing.player[5].cmp),
                    yards: parseInt(data.leaders.passing.player[5].yds),
                    touchdowns: parseInt(data.leaders.passing.player[5].td)
                }, {
                    name: data.leaders.passing.player[6].name,
                    attempts: parseInt(data.leaders.passing.player[6].att),
                    completions: parseInt(data.leaders.passing.player[6].cmp),
                    yards: parseInt(data.leaders.passing.player[6].yds),
                    touchdowns: parseInt(data.leaders.passing.player[6].td)
                }, {
                    name: data.leaders.passing.player[7].name,
                    attempts: parseInt(data.leaders.passing.player[7].att),
                    completions: parseInt(data.leaders.passing.player[7].cmp),
                    yards: parseInt(data.leaders.passing.player[7].yds),
                    touchdowns: parseInt(data.leaders.passing.player[7].td)
                }, {
                    name: data.leaders.passing.player[8].name,
                    attempts: parseInt(data.leaders.passing.player[8].att),
                    completions: parseInt(data.leaders.passing.player[8].cmp),
                    yards: parseInt(data.leaders.passing.player[8].yds),
                    touchdowns: parseInt(data.leaders.passing.player[8].td)
                }, {
                    name: data.leaders.passing.player[9].name,
                    attempts: parseInt(data.leaders.passing.player[9].att),
                    completions: parseInt(data.leaders.passing.player[9].cmp),
                    yards: parseInt(data.leaders.passing.player[9].yds),
                    touchdowns: parseInt(data.leaders.passing.player[9].td)
                }],
                    receiving: [{
                    name: data.leaders.receiving.player[0].name,
                    attempts: parseInt(data.leaders.receiving.player[0].rec),
                    completions: parseInt(data.leaders.receiving.player[0].tar),
                    yards: parseInt(data.leaders.receiving.player[0].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[0].td)
                }, {
                    name: data.leaders.receiving.player[1].name,
                    attempts: parseInt(data.leaders.receiving.player[1].rec),
                    completions: parseInt(data.leaders.receiving.player[1].tar),
                    yards: parseInt(data.leaders.receiving.player[1].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[1].td)
                }, {
                    name: data.leaders.receiving.player[2].name,
                    attempts: parseInt(data.leaders.receiving.player[2].rec),
                    completions: parseInt(data.leaders.receiving.player[2].tar),
                    yards: parseInt(data.leaders.receiving.player[2].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[2].td)
                }, {
                    name: data.leaders.receiving.player[3].name,
                    attempts: parseInt(data.leaders.receiving.player[3].rec),
                    completions: parseInt(data.leaders.receiving.player[3].tar),
                    yards: parseInt(data.leaders.receiving.player[3].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[3].td)
                }, {
                    name: data.leaders.receiving.player[4].name,
                    attempts: parseInt(data.leaders.receiving.player[4].rec),
                    completions: parseInt(data.leaders.receiving.player[4].tar),
                    yards: parseInt(data.leaders.receiving.player[4].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[4].td)
                }, {
                    name: data.leaders.receiving.player[5].name,
                    attempts: parseInt(data.leaders.receiving.player[5].rec),
                    completions: parseInt(data.leaders.receiving.player[5].tar),
                    yards: parseInt(data.leaders.receiving.player[5].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[5].td)
                }, {
                    name: data.leaders.receiving.player[6].name,
                    attempts: parseInt(data.leaders.receiving.player[6].rec),
                    completions: parseInt(data.leaders.receiving.player[6].tar),
                    yards: parseInt(data.leaders.receiving.player[6].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[6].td)
                }, {
                    name: data.leaders.receiving.player[7].name,
                    attempts: parseInt(data.leaders.receiving.player[7].rec),
                    completions: parseInt(data.leaders.receiving.player[7].tar),
                    yards: parseInt(data.leaders.receiving.player[7].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[7].td)
                }, {
                    name: data.leaders.receiving.player[8].name,
                    attempts: parseInt(data.leaders.receiving.player[8].rec),
                    completions: parseInt(data.leaders.receiving.player[8].tar),
                    yards: parseInt(data.leaders.receiving.player[8].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[8].td)
                }, {
                    name: data.leaders.receiving.player[9].name,
                    attempts: parseInt(data.leaders.receiving.player[9].rec),
                    completions: parseInt(data.leaders.receiving.player[9].tar),
                    yards: parseInt(data.leaders.receiving.player[9].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[9].td)
                }]
            }
            var chartData = parsePassingStatsToHighChartsData('15', ajaxResult)
            qbChartLaunch(chartData);
        },
        error: function(data) {
            console.log(data)
        }
    });
}


function parsePassingStatsToHighChartsData(week, stats) {
    return {
        title: 'Passing Leaders',
        subtitle: 'QB - Week ' + week,
        categories: $.map(stats.passing, function(passing_player) {
            return passing_player.name;
        }),
        pass_attempts: $.map(stats.passing, function(passing_player) {
            return passing_player.attempts;
        }),
        pass_completions: $.map(stats.passing, function(passing_player) {
            return passing_player.completions;
        }),
        pass_yards: $.map(stats.passing, function(passing_player) {
            return passing_player.yards;
        }),
        pass_tds: $.map(stats.passing, function(passing_player) {
            return passing_player.touchdowns;
        })
    }
}

function getRbData() {
    // performs ajax call.
    $.ajax({
        url: '/api_call',
        type: 'GET',
        success: function(data) {
            var ajaxResult = {
                season: 2014,
                week: 15,

                rushing: [{
                    name: data.leaders.rushing.player[0].name,
                    attempts: parseInt(data.leaders.rushing.player[0].att),
                    ypc: parseInt(data.leaders.rushing.player[0].avg),
                    yards: parseInt(data.leaders.rushing.player[0].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[0].td)
                }, {
                    name: data.leaders.rushing.player[1].name,
                    attempts: parseInt(data.leaders.rushing.player[1].att),
                    ypc: parseInt(data.leaders.rushing.player[1].avg),
                    yards: parseInt(data.leaders.rushing.player[1].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[1].td)
                }, {
                    name: data.leaders.rushing.player[2].name,
                    attempts: parseInt(data.leaders.rushing.player[2].att),
                    ypc: parseInt(data.leaders.rushing.player[2].avg),
                    yards: parseInt(data.leaders.rushing.player[2].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[2].td)
                }, {
                    name: data.leaders.rushing.player[3].name,
                    attempts: parseInt(data.leaders.rushing.player[3].att),
                    ypc: parseInt(data.leaders.rushing.player[3].avg),
                    yards: parseInt(data.leaders.rushing.player[3].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[3].td)
                }, {
                    name: data.leaders.rushing.player[4].name,
                    attempts: parseInt(data.leaders.rushing.player[4].att),
                    ypc: parseInt(data.leaders.rushing.player[4].avg),
                    yards: parseInt(data.leaders.rushing.player[4].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[4].td)
                }, {
                    name: data.leaders.rushing.player[5].name,
                    attempts: parseInt(data.leaders.rushing.player[5].att),
                    ypc: parseInt(data.leaders.rushing.player[5].avg),
                    yards: parseInt(data.leaders.rushing.player[5].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[5].td)
                }, {
                    name: data.leaders.rushing.player[6].name,
                    attempts: parseInt(data.leaders.rushing.player[6].att),
                    ypc: parseInt(data.leaders.rushing.player[6].avg),
                    yards: parseInt(data.leaders.rushing.player[6].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[6].td)
                }, {
                    name: data.leaders.rushing.player[7].name,
                    attempts: parseInt(data.leaders.rushing.player[7].att),
                    ypc: parseInt(data.leaders.rushing.player[7].avg),
                    yards: parseInt(data.leaders.rushing.player[7].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[7].td)
                }, {
                    name: data.leaders.rushing.player[8].name,
                    attempts: parseInt(data.leaders.rushing.player[8].att),
                    ypc: parseInt(data.leaders.rushing.player[8].avg),
                    yards: parseInt(data.leaders.rushing.player[8].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[8].td)
                }, {
                    name: data.leaders.rushing.player[9].name,
                    attempts: parseInt(data.leaders.rushing.player[9].att),
                    ypc: parseInt(data.leaders.rushing.player[9].avg),
                    yards: parseInt(data.leaders.rushing.player[9].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[9].td)
                }]
            }
            var chartData = parseRushingStatsToHighChartsData('15', ajaxResult)
            rbChartLaunch(chartData);
        },
        error: function(data) {
            console.log(data)
        }
    });
}


function parseRushingStatsToHighChartsData(week, stats) {
    return {
        title: 'Rushing Leaders',
        subtitle: 'RB - Week ' + week,
        categories: $.map(stats.rushing, function(rushing_player) {
            return rushing_player.name;
        }),
        rush_attempts: $.map(stats.rushing, function(rushing_player) {
            return rushing_player.attempts;
        }),
        rush_avg: $.map(stats.rushing, function(rushing_player) {
            return rushing_player.ypc;
        }),
        rush_yards: $.map(stats.rushing, function(rushing_player) {
            return rushing_player.yards;
        }),
        rush_tds: $.map(stats.rushing, function(rushing_player) {
            return rushing_player.touchdowns;
        })
    }
}

function getWrData() {
    // performs ajax call.
    $.ajax({
        url: '/api_call',
        type: 'GET',
        success: function(data) {
            var ajaxResult = {
                season: 2014,
                week: 15,
                    receiving: [{
                    name: data.leaders.receiving.player[0].name,
                    receptions: parseInt(data.leaders.receiving.player[0].rec),
                    targets: parseInt(data.leaders.receiving.player[0].tar),
                    yards: parseInt(data.leaders.receiving.player[0].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[0].td)
                }, {
                    name: data.leaders.receiving.player[1].name,
                    receptions: parseInt(data.leaders.receiving.player[1].rec),
                    targets: parseInt(data.leaders.receiving.player[1].tar),
                    yards: parseInt(data.leaders.receiving.player[1].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[1].td)
                }, {
                    name: data.leaders.receiving.player[2].name,
                    receptions: parseInt(data.leaders.receiving.player[2].rec),
                    targets: parseInt(data.leaders.receiving.player[2].tar),
                    yards: parseInt(data.leaders.receiving.player[2].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[2].td)
                }, {
                    name: data.leaders.receiving.player[3].name,
                    receptions: parseInt(data.leaders.receiving.player[3].rec),
                    targets: parseInt(data.leaders.receiving.player[3].tar),
                    yards: parseInt(data.leaders.receiving.player[3].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[3].td)
                }, {
                    name: data.leaders.receiving.player[4].name,
                    receptions: parseInt(data.leaders.receiving.player[4].rec),
                    targets: parseInt(data.leaders.receiving.player[4].tar),
                    yards: parseInt(data.leaders.receiving.player[4].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[4].td)
                }, {
                    name: data.leaders.receiving.player[5].name,
                    receptions: parseInt(data.leaders.receiving.player[5].rec),
                    targets: parseInt(data.leaders.receiving.player[5].tar),
                    yards: parseInt(data.leaders.receiving.player[5].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[5].td)
                }, {
                    name: data.leaders.receiving.player[6].name,
                    receptions: parseInt(data.leaders.receiving.player[6].rec),
                    targets: parseInt(data.leaders.receiving.player[6].tar),
                    yards: parseInt(data.leaders.receiving.player[6].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[6].td)
                }, {
                    name: data.leaders.receiving.player[7].name,
                    receptions: parseInt(data.leaders.receiving.player[7].rec),
                    targets: parseInt(data.leaders.receiving.player[7].tar),
                    yards: parseInt(data.leaders.receiving.player[7].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[7].td)
                }, {
                    name: data.leaders.receiving.player[8].name,
                    receptions: parseInt(data.leaders.receiving.player[8].rec),
                    targets: parseInt(data.leaders.receiving.player[8].tar),
                    yards: parseInt(data.leaders.receiving.player[8].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[8].td)
                }, {
                    name: data.leaders.receiving.player[9].name,
                    receptions: parseInt(data.leaders.receiving.player[9].rec),
                    targets: parseInt(data.leaders.receiving.player[9].tar),
                    yards: parseInt(data.leaders.receiving.player[9].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[9].td)
                }]
            }
            var chartData = parseReceivingStatsToHighChartsData('15', ajaxResult)
            wrChartLaunch(chartData);
        },
        error: function(data) {
            console.log(data)
        }
    });
}

function parseReceivingStatsToHighChartsData(week, stats) {
    return {
        title: 'Receiving Leaders',
        subtitle: 'WR/TE - Week ' + week,
        categories: $.map(stats.receiving, function(receiving_player) {
            return receiving_player.name;
        }),
        targets: $.map(stats.receiving, function(receiving_player) {
            return receiving_player.targets;
        }),
        receptions: $.map(stats.receiving, function(receiving_player) {
            return receiving_player.receptions;
        }),
        rec_yards: $.map(stats.receiving, function(receiving_player) {
            return receiving_player.yards;
        }),
        rec_tds: $.map(stats.receiving, function(receiving_player) {
            return receiving_player.touchdowns;
        })
    }
}
