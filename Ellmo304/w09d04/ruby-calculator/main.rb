continue = 'y'
while continue == "y"
  p "Hello, I'l be your calculator for today! What kind of calculation would you like to do?"
  p "Type b for basic calculation or a for advanced. Type s for stamp duty calculator"
  user_choice = gets.chomp
  case user_choice
  when "b"
    p "Basic. Type a for addition, s for subtraction, m for multiplication or d for division"
    user_choice = gets.chomp
    case user_choice
    when "a"
      p "You chose addition. Please enter first number to add"
      first_num = gets.to_f
      p "Please enter second number to add"
      second_num = gets.to_f
      p "Your answer is #{first_num + second_num}"
    when "s"
      p "You chose subtraction. Please enter starting number"
      first_num = gets.to_f
      p "Please enter number to subtract"
      second_num = gets.to_f
      p "Your answer is #{first_num - second_num}"
    when "m"
      p "You chose multiplication. Please enter first number to multiply"
      first_num = gets.to_f
      p "Please enter second number to mulitply"
      second_num = gets.to_f
      p "Your answer is #{first_num * second_num}"
    when "d"
      p "You chose division. Please enter starting number"
      first_num = gets.to_f
      p "Please enter number to divide by"
      second_num = gets.to_f
      p "Your answer is #{first_num / second_num}"
    else
      p "Please enter a, s, m or d"
    end
  when "a"
    p "Advanced. Please enter s for square root or p for powers"
    user_choice = gets.chomp
    case user_choice
    when "s"
      p "Please enter number to find square root of"
      first_num = gets.to_f
      p "#{Math.sqrt(first_num)}"
    when "p"
      p "Enter starting number"
      first_num = gets.to_f
      p "To the power of...?"
      second_num = gets.to_f
      p "#{first_num ** second_num}"
    else
      p "Please enter s or p"
    end
  when "s"
    p "Stamp duty. Please enter property price in £, without commas eg. 300000"
    first_num = gets.to_f
    if (first_num < 125000)
      p "You have no stamp duty!"
    elsif (first_num >= 125000 && first_num < 250000)
      second_num = (first_num/100)*2
      p "Your stamp duty is #{second_num}"
    else
      second_num = (first_num/100)*5
      p "Your stamp duty is #{second_num}"
    end
  end
  p "Continue? Enter y or n"
  user_answer = gets.chomp
  case user_answer
  when "y"
    continue = "y"
  when "n"
    continue = "n"
    p "Goodbye"
    exit
  else
    "Please enter y or n"
  end
end
