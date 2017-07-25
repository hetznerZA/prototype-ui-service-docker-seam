module GreetByName
  module Provider
    class English
      def call(name:)
        "Hi #{name.capitalize}. How are you today?"
      end
    end
  end
end
