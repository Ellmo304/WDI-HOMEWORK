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
	image: "http://www.readcomics.tv/images/manga/invisibles-the/23/1.jpg",
	issue: 23,

},
{
  title: "Saga",
	author: "Brian K Vaughn",
	image: "http://static8.comicvine.com/uploads/scale_large/6/67663/3501436-05.jpg",
	issue: 5,
},
{
  title: "Detective Comics",
  author: "Scott Snyder",
  image: "http://static1.comicvine.com/uploads/scale_large/5/56044/2380309-detective_comics__1937___880.jpeg",
  issue: 880,

}])
