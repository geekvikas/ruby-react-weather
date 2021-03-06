class API::V1::WeatherController < ApplicationController
  before_action :get_weather
  
  def index
    render json: @weather
  end
  
  private
  
  def get_weather

    lat = params[:lat] 
    lon = params[:lon] 
    

    require "uri"
    require "net/http"

    url = URI("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + ENV["OWM_API_KEY"])

    https = Net::HTTP.new(url.host, url.port);
    
    request = Net::HTTP::Get.new(url)
    response = https.request(request)
    weather_data =  response.read_body

    @weather = weather_data
  end
  
  end