module GreetByName
  class Service

    def initialize(provider:)
      @provider = provider
    end

    def call(name:)
      {
        greeting: @provider.call(name: name)
      }
    end

  end
end
