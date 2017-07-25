require "rack/cors"
require "rack"
require "json"

require "greet_by_name/service"
require "greet_by_name/provider/afrikaans"
require "greet_by_name/provider/english"

class GreetByNameApp

  def initialize(service)
    @service = service
  end

  def call(env)
    req = Rack::Request.new(env)
    name = req.params['name']
    [200, {"content-type" => "application/json", }, [@service.call(name: name).to_json]]
  end

end

router = Rack::Builder.new do
  use Rack::Cors do
    allow do
      origins '*'
      resource '*', :headers => :any, :methods => :any
    end
  end

  map "/" do
    run GreetByNameApp.new(
       GreetByName::Service.new(provider: GreetByName::Provider::English.new)
    )
  end
end

run router

