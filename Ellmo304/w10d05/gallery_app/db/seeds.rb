# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.connection.execute("TRUNCATE galleries RESTART IDENTITY")

Gallery.create!([{
	name: "Whitechapel Gallery",
	address: "77-82 Whitechapel High St, London, E1 7QX",
	nearest_tube: "Aldgate East",
	image: "https://media.timeout.com/images/100680273/750/422/image.jpg",
	body: "Opening Hours: Tue-Sun 11am-6pm; Thu 11am-9pm. Christmas closure: Dec 24-26"
},
{
	name: "National Portrait Gallery",
  address: "St Martin's Place, London, WC2H 0HE",
	nearest_tube: "Charing Cross",
	image: "https://media.timeout.com/images/62052/750/422/image.jpg",
	body: "Opening Hours: Mon-Wed, Sat, Sun 10am-6pm; Thu, Fri 10am-9pm"
},
{
	name: "Tate Britain",
  address: "Millbank, London, SW1P 4RG",
	nearest_tube: "Pimlico",
	image: "https://media.timeout.com/images/100682121/750/422/image.jpg",
	body: "Opening Hours: Daily 10am-6pm (last admission for special exhibitions 5.15pm)"
}])
