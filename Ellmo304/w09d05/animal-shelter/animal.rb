class Animal
  attr_reader :name, :breed, :gender
  attr_accessor :favorite_toys

  def initialize(name, breed, gender)
    @name = name
    @gender = gender
    @breed = breed
    @favorite_toys = []
  end

  def to_s
    "#{@name} is a #{@gender} #{@breed}. #{@name}\'s favorite toys are #{@favorite_toys}."
  end

  def add_toy(toy)
      @favorite_toys << toy
  end
end


# - name
# - breed
# - gender
# - favorite toys _(Array of strings)_
