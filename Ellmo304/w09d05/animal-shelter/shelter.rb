class Shelter
  attr_reader :name
  attr_accessor :animals
  attr_accessor :clients
  attr_reader :capacity

  def initialize(name, capacity)
    @name = name
    @animals = []
    @clients = []
    @capacity = capacity
  end

  def add_animal(animal)
    @animals << animal
  end

  def add_client(client)
    @clients << client
  end


end
