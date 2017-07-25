module GreetByName
  module Provider
    class Afrikaans 
      def call(name:)
        "Goeie dag #{name.capitalize}. Hoe gaan dit met jou?"
      end
    end
  end
end
