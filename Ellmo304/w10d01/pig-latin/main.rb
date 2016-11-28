require "sinatra"
require "sinatra/reloader" if development?
require_relative "controllers/main_controller"
require_relative "models/pig_latin"
