class Client
  attr_reader :first_name, :last_name
  attr_accessor :pets
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
    @pets = []
  end

  def add_pet(pet)
      @pets << pet
  end
  def to_s
    " #{@first_name} #{@last_name}"
  end
end
