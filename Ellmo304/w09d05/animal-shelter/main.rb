require_relative "shelter"
require_relative "animal"
require_relative "client"

@shelter = Shelter.new("Pets r us", 100)

elliot = Client.new("Elliot", "Brock")
frank = Animal.new("Frank", "cat", "male")
frank.add_toy("mouse")
frank.add_toy("ball of string")
elliot.add_pet(frank)
@shelter.add_client(elliot)
catherine = Client.new("Catherine", "Carroll")
@shelter.add_client(catherine)
max = Animal.new("Max", "dog", "male")
max.add_toy("chewy bone")
max.add_toy("ball")
@shelter.add_animal(max)


def menu
  puts `clear`
  puts "*** Welcome to #{@shelter.name} ***\n\n"
  puts "1 : List all animals in this shelter"
  puts "2 : List all clients"
  puts "3 : Adopt an animal"
  puts "4 : Give up an animal"
  puts "Q : Quit\n\n"
  print "--> "
  gets.chomp

end

def adopt_animal(shelter, choose_client, choose_animal)
  shelter.clients[choose_client].pets << shelter.animals[choose_animal]
  shelter.animals.delete_at(choose_animal)
end

def list_clients(shelter)
  shelter.clients.each_with_index do |client, index|
    puts "#{index}.\t#{client}"
  end
end

def list_animals(shelter)
  shelter.animals.each_with_index do |animal, index|
    puts "#{index}.\t#{animal}"
  end
end


def list_clients_pets(shelter, client)
  shelter.clients[client].pets.each_with_index do |pet, index|
    puts "#{index}.\t#{pet}"
  end
end

def surrender_animal(shelter, client, pet)
  shelter.animals << shelter.clients[client].pets[pet]
  shelter.clients[client].pets.delete_at(pet)
end



response = menu
until response.upcase == "Q"
  case response

  when "1" #list animals
    list_animals(@shelter)
    gets
  when "2" #list clients
    list_clients(@shelter)
    gets
  when "3" #adopt an animal
    puts "Which client wants to adopt an animal?"
    list_clients(@shelter)
    choose_client = gets.to_i
    puts "Which animal do they wish to adopt?"
    list_animals(@shelter)
    choose_animal = gets.to_i
    adopt_animal(@shelter, choose_client, choose_animal)
    gets
  when "4" #adds animal to shelter
    puts "Who wants to give up the animal?"
    list_clients(@shelter)
    this_client = gets.to_i
    puts "Which animal do they want to give up?"
    list_clients_pets(@shelter, this_client)
    this_pet = gets.to_i
    surrender_animal(@shelter, this_client, this_pet)
    gets
  end
  response = menu
end
