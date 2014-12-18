$(document).ready(function() {
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
        data: {
            week: $("#week").val(),
            season: $("#season").val()
        },
        success: function(data) {
            var ajaxResult = {
                season: data.leaders.season,
                week: data.leaders.week,
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
                }]

            }
            var chartData = parsePassingStatsToHighChartsData(ajaxResult.week, ajaxResult)
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
        data: {
            week: $("#week").val(),
            season: $("#season").val()
        },
        success: function(data) {
            var ajaxResult = {
                season: data.leaders.season,
                week: data.leaders.week,

                rushing: [{
                    name: data.leaders.rushing.player[0].name,
                    attempts: parseInt(data.leaders.rushing.player[0].att),
                    ypc: parseInt(data.leaders.rushing.player[0].avg),
                    yards: parseInt(data.leaders.rushing.player[0].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[0].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[0].rz_att)

                }, {
                    name: data.leaders.rushing.player[1].name,
                    attempts: parseInt(data.leaders.rushing.player[1].att),
                    ypc: parseInt(data.leaders.rushing.player[1].avg),
                    yards: parseInt(data.leaders.rushing.player[1].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[1].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[1].rz_att)
                }, {
                    name: data.leaders.rushing.player[2].name,
                    attempts: parseInt(data.leaders.rushing.player[2].att),
                    ypc: parseInt(data.leaders.rushing.player[2].avg),
                    yards: parseInt(data.leaders.rushing.player[2].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[2].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[2].rz_att)
                }, {
                    name: data.leaders.rushing.player[3].name,
                    attempts: parseInt(data.leaders.rushing.player[3].att),
                    ypc: parseInt(data.leaders.rushing.player[3].avg),
                    yards: parseInt(data.leaders.rushing.player[3].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[3].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[3].rz_att)
                }, {
                    name: data.leaders.rushing.player[4].name,
                    attempts: parseInt(data.leaders.rushing.player[4].att),
                    ypc: parseInt(data.leaders.rushing.player[4].avg),
                    yards: parseInt(data.leaders.rushing.player[4].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[4].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[4].rz_att)
                }, {
                    name: data.leaders.rushing.player[5].name,
                    attempts: parseInt(data.leaders.rushing.player[5].att),
                    ypc: parseInt(data.leaders.rushing.player[5].avg),
                    yards: parseInt(data.leaders.rushing.player[5].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[5].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[5].rz_att)
                }, {
                    name: data.leaders.rushing.player[6].name,
                    attempts: parseInt(data.leaders.rushing.player[6].att),
                    ypc: parseInt(data.leaders.rushing.player[6].avg),
                    yards: parseInt(data.leaders.rushing.player[6].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[6].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[6].rz_att)
                }, {
                    name: data.leaders.rushing.player[7].name,
                    attempts: parseInt(data.leaders.rushing.player[7].att),
                    ypc: parseInt(data.leaders.rushing.player[7].avg),
                    yards: parseInt(data.leaders.rushing.player[7].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[7].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[7].rz_att)
                }, {
                    name: data.leaders.rushing.player[8].name,
                    attempts: parseInt(data.leaders.rushing.player[8].att),
                    ypc: parseInt(data.leaders.rushing.player[8].avg),
                    yards: parseInt(data.leaders.rushing.player[8].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[8].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[8].rz_att)
                }, {
                    name: data.leaders.rushing.player[9].name,
                    attempts: parseInt(data.leaders.rushing.player[9].att),
                    ypc: parseInt(data.leaders.rushing.player[9].avg),
                    yards: parseInt(data.leaders.rushing.player[9].yds),
                    touchdowns: parseInt(data.leaders.rushing.player[9].td),
                    redzone_attempts: parseInt(data.leaders.rushing.player[9].rz_att)
                }]
            }
            var chartData = parseRushingStatsToHighChartsData(ajaxResult.week, ajaxResult)
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
        }),
        rdz_att: $.map(stats.rushing, function(rushing_player) {
            return rushing_player.redzone_attempts;
        })
    }
}

function getWrData() {
    // performs ajax call.
    $.ajax({
        url: '/api_call',
        type: 'GET',
        data: {
            week: $("#week").val(),
            season: $("#season").val()
        },
        success: function(data) {
            var ajaxResult = {
                season: data.leaders.week,
                week: data.leaders.week,
                receiving: [{
                    name: data.leaders.receiving.player[0].name,
                    receptions: parseInt(data.leaders.receiving.player[0].rec),
                    targets: parseInt(data.leaders.receiving.player[0].tar),
                    yards: parseInt(data.leaders.receiving.player[0].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[0].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[0].rz_tar)
                }, {
                    name: data.leaders.receiving.player[1].name,
                    receptions: parseInt(data.leaders.receiving.player[1].rec),
                    targets: parseInt(data.leaders.receiving.player[1].tar),
                    yards: parseInt(data.leaders.receiving.player[1].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[1].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[1].rz_tar)
                }, {
                    name: data.leaders.receiving.player[2].name,
                    receptions: parseInt(data.leaders.receiving.player[2].rec),
                    targets: parseInt(data.leaders.receiving.player[2].tar),
                    yards: parseInt(data.leaders.receiving.player[2].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[2].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[2].rz_tar)
                }, {
                    name: data.leaders.receiving.player[3].name,
                    receptions: parseInt(data.leaders.receiving.player[3].rec),
                    targets: parseInt(data.leaders.receiving.player[3].tar),
                    yards: parseInt(data.leaders.receiving.player[3].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[3].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[3].rz_tar)
                }, {
                    name: data.leaders.receiving.player[4].name,
                    receptions: parseInt(data.leaders.receiving.player[4].rec),
                    targets: parseInt(data.leaders.receiving.player[4].tar),
                    yards: parseInt(data.leaders.receiving.player[4].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[4].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[4].rz_tar)
                }, {
                    name: data.leaders.receiving.player[5].name,
                    receptions: parseInt(data.leaders.receiving.player[5].rec),
                    targets: parseInt(data.leaders.receiving.player[5].tar),
                    yards: parseInt(data.leaders.receiving.player[5].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[5].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[5].rz_tar)
                }, {
                    name: data.leaders.receiving.player[6].name,
                    receptions: parseInt(data.leaders.receiving.player[6].rec),
                    targets: parseInt(data.leaders.receiving.player[6].tar),
                    yards: parseInt(data.leaders.receiving.player[6].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[6].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[6].rz_tar)
                }, {
                    name: data.leaders.receiving.player[7].name,
                    receptions: parseInt(data.leaders.receiving.player[7].rec),
                    targets: parseInt(data.leaders.receiving.player[7].tar),
                    yards: parseInt(data.leaders.receiving.player[7].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[7].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[7].rz_tar)
                }, {
                    name: data.leaders.receiving.player[8].name,
                    receptions: parseInt(data.leaders.receiving.player[8].rec),
                    targets: parseInt(data.leaders.receiving.player[8].tar),
                    yards: parseInt(data.leaders.receiving.player[8].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[8].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[8].rz_tar)
                }, {
                    name: data.leaders.receiving.player[9].name,
                    receptions: parseInt(data.leaders.receiving.player[9].rec),
                    targets: parseInt(data.leaders.receiving.player[9].tar),
                    yards: parseInt(data.leaders.receiving.player[9].yds),
                    touchdowns: parseInt(data.leaders.receiving.player[9].td),
                    redzone_targets: parseInt(data.leaders.receiving.player[9].rz_tar)
                }]
            }

            var chartData = parseReceivingStatsToHighChartsData(ajaxResult.week, ajaxResult)
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
        }),
        rdz_tar: $.map(stats.receiving, function(receiving_player) {
            return receiving_player.redzone_targets;
        })
    }
}

function getKData() {
    // performs ajax call.
    $.ajax({
        url: '/api_call',
        type: 'GET',
        data: {
            week: $("#week").val(),
            season: $("#season").val()
        },
        success: function(data) {
            var ajaxResult = {
                season: data.leaders.week,
                week: data.leaders.week,
                field_goal: [{
                    name: data.leaders.field_goal.player[0].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[0].att),
                    fg_made: parseInt(data.leaders.field_goal.player[0].made),
                    fg_long: parseInt(data.leaders.field_goal.player[0].lg),
                }, {
                    name: data.leaders.field_goal.player[1].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[1].att),
                    fg_made: parseInt(data.leaders.field_goal.player[1].made),
                    fg_long: parseInt(data.leaders.field_goal.player[1].lg),
                }, {
                    name: data.leaders.field_goal.player[2].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[2].att),
                    fg_made: parseInt(data.leaders.field_goal.player[2].made),
                    fg_long: parseInt(data.leaders.field_goal.player[2].lg),
                }, {
                    name: data.leaders.field_goal.player[3].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[3].att),
                    fg_made: parseInt(data.leaders.field_goal.player[3].made),
                    fg_long: parseInt(data.leaders.field_goal.player[3].lg),
                }, {
                    name: data.leaders.field_goal.player[4].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[4].att),
                    fg_made: parseInt(data.leaders.field_goal.player[4].made),
                    fg_long: parseInt(data.leaders.field_goal.player[4].lg),
                }, {
                    name: data.leaders.field_goal.player[5].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[5].att),
                    fg_made: parseInt(data.leaders.field_goal.player[5].made),
                    fg_long: parseInt(data.leaders.field_goal.player[5].lg),
                }, {
                    name: data.leaders.field_goal.player[6].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[6].att),
                    fg_made: parseInt(data.leaders.field_goal.player[6].made),
                    fg_long: parseInt(data.leaders.field_goal.player[6].lg),
                }, {
                    name: data.leaders.field_goal.player[7].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[7].att),
                    fg_made: parseInt(data.leaders.field_goal.player[7].made),
                    fg_long: parseInt(data.leaders.field_goal.player[7].lg),
                }, {
                    name: data.leaders.field_goal.player[8].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[8].att),
                    fg_made: parseInt(data.leaders.field_goal.player[8].made),
                    fg_long: parseInt(data.leaders.field_goal.player[8].lg),
                }, {
                    name: data.leaders.field_goal.player[9].name,
                    fg_attempts: parseInt(data.leaders.field_goal.player[9].att),
                    fg_made: parseInt(data.leaders.field_goal.player[9].made),
                    fg_long: parseInt(data.leaders.field_goal.player[9].lg),
                }]
            }

            var chartData = parseKickerStatsToHighChartsData(ajaxResult.week, ajaxResult)
            kChartLaunch(chartData);
        },
        error: function(data) {
            console.log(data)
        }
    });
}

function parseKickerStatsToHighChartsData(week, stats) {
    return {
        title: 'Kicking Leaders',
        subtitle: 'K - Week ' + week,
        categories: $.map(stats.field_goal, function(field_goal_player) {
            return field_goal_player.name;
        }),
        attempts: $.map(stats.field_goal, function(field_goal_player) {
            return field_goal_player.fg_attempts;
        }),
        made: $.map(stats.field_goal, function(field_goal_player) {
            return field_goal_player.fg_made;
        }),
        fglong: $.map(stats.field_goal, function(field_goal_player) {
            return field_goal_player.fg_long;
        })
    }
}
