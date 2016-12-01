# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.connection.execute("TRUNCATE comics RESTART IDENTITY")

Comic.create!([{
	title: "The Invisibles",
	author: "Grant Morrison",
	image: "",
	issue: 1,

},
{
  title: "Detective Comics",
  author: "Scott Snyder",
  image: "",
  issue: 100,

},
{
  title: "Saga",
	author: "Fiona Staples",
	image: "",
	issue: 5,
}])
