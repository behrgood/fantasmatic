require 'httparty'
class WelcomeController < ApplicationController

  def index

    get_arrays
  end

  def generate
  end

  def make_api_call
    @week = params[:week]
    @season = params[:season]
    render json: make_call
  end

  private

  def make_call
    week = params[:week] || 15
    HTTParty.get("http://api.sportsdatallc.org/nfl-t1/2014/REG/15/leaders.xml?api_key=#{Figaro.env.sports_data_api_key}")
  end

  def get_arrays
    @seasons = [
      ['2013', '2013'],
      ['2014', '2014']
    ]

    @weeks = [
      ["1", "1" ],
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
      ["14", "14"],
      ["15", "15"],
      ["16", "16"],
      ["17", "17"]
    ]
  end
end
