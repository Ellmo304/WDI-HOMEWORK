# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.connection.execute("TRUNCATE galleries, exhibitions, reviews RESTART IDENTITY")

Gallery.create!([{
	name: "Whitechapel Gallery",
	address: "77-82 Whitechapel High St, London, E1 7QX",
	nearest_tube: "Aldgate East",
	image: "https://media.timeout.com/images/100680273/750/422/image.jpg",
	body: "Opening Hours: Tue-Sun 11am-6pm; Thu 11am-9pm. Christmas closure: Dec 24-26.
  This East End stalwart reopened in 2009 following a major redesign and expansion that saw the Grade II listed building transformed into a vibrant, holistic centre of art complete with a research centre, archives room and café. Since 1901, Whitechapel Art Gallery has built on its reputation as a pioneering contemporary institution and is well remembered for premiering the talents of exhibitions by Jackson Pollock, Mark Rothko and Frida Kahlo among others. Expect the rolling shows to be challenging and risqué."
},
{
	name: "National Portrait Gallery",
  address: "St Martin's Place, London, WC2H 0HE",
	nearest_tube: "Charing Cross",
	image: "https://media.timeout.com/images/62052/750/422/image.jpg",
	body: "Opening Hours: Mon-Wed, Sat, Sun 10am-6pm; Thu, Fri 10am-9pm.
  Portraits don't have to be stuffy. The National Portrait Gallery has everything from oil paintings of stiff-backed royals to photos of soccer stars and gloriously unflattering political caricatures. The portraits of musicians, scientists, artists, philanthropists and celebrities are arranged in chronological order from the top to the bottom of the building. At the top of the escalator up from the main foyer are the earliest works, portraits of Tudor and Stuart royals and notables. On the same floor, the eighteenth-century collection features Georgian writers and artists, with one room devoted to the influential Kit-Cat Club of Whig (leftish) intellectuals, Congreve and Dryden among them. More famous names here include Wren and Swift. The Duveen Extension contains Regency greats, military men such as Wellington and Nelson, as well as Byron, Wordsworth and other Romantics. The first floor is devoted to the Victorians (Dickens, Brunel, Darwin) and, in the Duveen Extension, the twentieth century. One of the NPG's most popular highlights is the annual BP Portrait Award where the best entrants for the prestigious prize are exhibited."
},
{
	name: "Tate Britain",
  address: "Millbank, London, SW1P 4RG",
	nearest_tube: "Pimlico",
	image: "https://media.timeout.com/images/100682121/750/422/image.jpg",
	body: "Opening Hours: Daily 10am-6pm (last admission for special exhibitions 5.15pm).
  Tate Modern gets all the attention, but the original Tate Gallery, founded by sugar magnate Sir Henry Tate, has a broader and more inclusive brief. Housed in a stately Portland stone building on the riverside, Tate Britain is second only to the National Gallery when it comes to British art. It’s also looking to steal back a bit of the limelight from its starrier sibling with a 20-year redevelopment plan called the Millbank Project: conserving the building’s original features, upgrading the galleries, opening new spaces to the public and adding a new café. The art here is exceptional. The historical collection includes work by Hogarth, Gainsborough, Reynolds, Constable (who gets three rooms) and Turner (in the superb Clore Gallery). Many contemporary works were shifter to the other Tate when it opened, but Stanley Spencer, Lucian Freud and Francis Bacon are all well represented, and Art Now installations showcase up-and-coming British artists. Temporary exhibitions include headline-hungry blockbusters and the annual controversy-courting Turner Prize exhibition (October-January). The gallery has a good restaurant and an exemplary gift shop."
},
{
	name: "Barbican",
  address: "Silk St, London, EC2Y 8DS",
	nearest_tube: "Barbican",
	image: "https://media.timeout.com/images/100680115/750/422/image.jpg",
	body: "Centre Mon-Sat 9am-11pm; Sun noon-11pm. Art Gallery Mon, Tue, Wed, Sat, Sun 10am-6pm; Thu, Fri 10am–9pm. The Curve Mon, Tue, Wed, Sat, Sun 11am–8pm; Thu, Fri 11am–9pm
  The Barbican Centre, a vast concrete estate of 2,000 flats and a leading arts complex, is a prime example of brutalist architecture, softened a little by time and rectangular ponds of friendly resident ducks. The lakeside terrace and adjoining café are good spots to take a rest from visiting the art gallery, cinema, theatre, concert hall or library within the complex. The art gallery on the third floor stages exhibitions on design, architecture and pop culture, while on the ground floor, the Curve is a free exhibition space for specially commissioned works and contemporary art. At the core of the music roster, performing 90 concerts a year, is the London Symphony Orchestra (LSO). The annual BITE season (Barbican International Theatre Events) continues to cherry-pick exciting and eclectic theatre companies from around the globe. The Barbican regularly attracts and nurtures experimental dance, and the Pit Theatre is a perfectly intimate space."
},
{
	name: "Tate Modern",
  address: "Bankside, London, SE1 9TG",
	nearest_tube: "Blackfriars/Southwark",
	image: "https://media.timeout.com/images/102272961/750/422/image.jpg",
	body: "Mon-Thu, Sat, Sun 10am-6pm; Fri 10am-10pm (last adm 45 mins before closing).
  Thanks to its industrial architecture, this powerhouse of modern art is awe-inspiring even before you enter. Built after World War II as Bankside Power Station, it was designed by Sir Giles Gilbert Scott, architect of Battersea Power Station. The power station shut in 1981; nearly 20 years later, it opened as an art museum, and has enjoyed spectacular popularity ever since. The gallery attracts five million visitors a year to a building intended for half that number; the first fruits of work on the immensely ambitious, £215m TM2 extension opened in 2012: the Tanks, so-called because they occupy vast, subterranean former oil tanks, will stage performance and film art. As for the rest of the extension, a huge new origami structure, designed by Herzog & de Meuron (who were behind the original conversion), will gradually unfold above the Tanks until perhaps 2016, but the work won’t interrupt normal service in the main galleries.

In the main galleries themselves, the original cavernous turbine hall is still used to jaw-dropping effect as the home of large-scale, temporary installations. Beyond, the permanent collection draws from the Tate’s collections of modern art (international works from 1900) and features heavy hitters such as Matisse, Rothko and Beuys – a genuinely world-class collection, expertly curated. There are vertiginous views down inside the building from outside the galleries, which group artworks according to movement (Surrealism, Minimalism, Post-war abstraction) rather than by theme."
},
{
	name: "National Gallery",
  address: "Trafalgar Square, London, WC2N 5DN",
	nearest_tube: "Charing Cross",
	image: "https://media.timeout.com/images/103259309/750/422/image.jpg",
	body: "Open daily 10am–6pm, Fridays 10am–9pm. Closed Jan 1, Dec 24–26.
  Established in 1824 as a new art collection for the enjoyment and education of all, the National Gallery first consisted of 38 pictures, put on display at a house on Pall Mall while a purpose-built gallery was constructed. There are now over 2,300 works of art, from medieval classics to world-famous pieces by the French Impressionists. The new museum opened in 1838, located in Trafalgar Square because it was deemed to be at the heart of London – easy for rich people to visit from the west by carriage and also convenient for poor people coming by foot from east London.

Free to visit, the National Gallery is still as welcoming to all as it was back then. Anyone can swing by and gaze on Van Gogh’s ‘Sunflowers’ for ten minutes on their way to work, or stay all day and admire JMW Turner’s Bequest or Cézanne’s ‘Bathers’.

The gallery has blockbuster exhibitions, music concerts and courses that do carry an entry charge, but most of the collection isn’t ticketed, and there are free talks each day, which you don’t need to book in advance. These take a closer look at a different painting or theme each time.

There are free sessions for families on Sundays and during school holidays, too. These give children aged five to 12 the chance to experience the grand gallery atmosphere whilst getting creative in drawing and art workshops designed for their level of interest. These are drop-in, but demand can be high, so you might have to wait for spaces unless you arrive early."
}])
