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
                passing: function(data) {
                    var passingArray = []
                    for (var i = 0; i < 10; i++) {
                        var passer = {
                            name: data.leaders.passing.player[i].name,
                            attempts: parseInt(data.leaders.passing.player[i].att),
                            completions: parseInt(data.leaders.passing.player[i].cmp),
                            yards: parseInt(data.leaders.passing.player[i].yds),
                            touchdowns: parseInt(data.leaders.passing.player[i].td)
                        }
                        passingArray.push(passer)
                    }
                    return passingArray;
                }
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

                rushing: function(data) {
                    var rushingArray = [];
                    for (var i = 0; i < 10; i++) {
                        var rusher = {
                            name: data.leaders.rushing.player[0].name,
                            attempts: parseInt(data.leaders.rushing.player[0].att),
                            ypc: parseInt(data.leaders.rushing.player[0].avg),
                            yards: parseInt(data.leaders.rushing.player[0].yds),
                            touchdowns: parseInt(data.leaders.rushing.player[0].td),
                            redzone_attempts: parseInt(data.leaders.rushing.player[0].rz_att)
                        }
                        rushingArray.push(rusher)
                    }
                    return rushingArray;
                }
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
                receiving: function(data) {
                    var receivingArray = [];
                    for (var i = 0; i < 10; i++) {
                        var receiver = {
                            name: data.leaders.receiving.player[0].name,
                            receptions: parseInt(data.leaders.receiving.player[0].rec),
                            targets: parseInt(data.leaders.receiving.player[0].tar),
                            yards: parseInt(data.leaders.receiving.player[0].yds),
                            touchdowns: parseInt(data.leaders.receiving.player[0].td),
                            redzone_targets: parseInt(data.leaders.receiving.player[0].rz_tar)
                        }
                        receivingArray.push(receiver)
                    }
                    return receivingArray;
                }
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
                field_goal: function(data) {
                    var kickingArray = [];
                    for (var i = 0; i < 10; i++) {
                        var kicker = {
                            name: data.leaders.field_goal.player[0].name,
                            fg_attempts: parseInt(data.leaders.field_goal.player[0].att),
                            fg_made: parseInt(data.leaders.field_goal.player[0].made),
                            fg_long: parseInt(data.leaders.field_goal.player[0].lg),
                        }
                        kickingArray.push(kicker)
                    }
                    return kickingArray;
                }
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
