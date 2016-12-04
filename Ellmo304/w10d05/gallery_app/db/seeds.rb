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


Exhibition.create!([{
  name: "Guerrilla Girls",
  artist: "Guerrilla Girls",
  opening_date: DateTime.new(2016, 11, 23),
  closing_date: DateTime.new(2017, 5, 5),
  image: "https://media.timeout.com/images/102987576/750/422/image.jpg",
  body: "The Guerrilla Girls are some of the art world’s most creative complainers, and for over 30 years now, they have been handing America’s galleries their arses on a platter. For their show at the Whitechapel Gallery, they’ve turned their attentions to Europe.

This entire exhibition is based on a survey they sent out to 400 art institutions across 29 countries on the continent. In it, they demand stats for their representation of female artists, those who are gender non-conforming and artists of colour. Spoiler: it doesn’t go well.

As the Guerrilla Girls announce on a banner on the front of the Whitechapel building, ‘only one quarter’ of those contacted responded (disappointingly, the Serpentine and the Saatchi Gallery were among the no-shows). The completed questionnaires are pasted onto the gallery wall, filled with the urgently scrawled handwriting of gallery directors. Put your contacts in, because there’s a whole lot of reading required for this show.

Colourful posters pull out some of the best responses; when asked if it was the first time they’d collected such stats, Manchester Art Gallery replied: ‘No, we talk about these issues a lot’ – but the Guerrillas point out that their collection is still ‘80 percent male and 85 percent white’. The average representation of women artists was a pathetic 22 percent. One of the few glimmers of hope was Poland, where that figure was 28 percent and all but one of the responding galleries had a female director.

  Informative as all this is, there’s not a great deal going on here visually: before entering the show, there’s a brief video of old news clips and Guerrilla Girls interview items, but you have to stand awkwardly in a corridor to watch it. These artists are brilliant orators, and a stronger audio-visual element would have hammered the their message home. After 15 minutes of scanning printouts, it starts to feel a little dry.

But the group wanted the numbers to speak for themselves, and it’s not hard to see why. These are the galleries that spoon-feed us our art, and shape our definition of what’s ‘worth’ seeing. These are the museums that curate our visual history through their collections, and we can’t afford not to question them when our history is rewritten as 80 percent male and 85 percent white. If it weren’t for the Guerrilla Girls, they’d get to keep on pretending those arses were squeaky clean. ",
  gallery_id: 1
},
{
  name: "Glasses",
  artist: "Luc Tuymans",
  opening_date: DateTime.new(2016, 11, 23),
  closing_date: DateTime.new(2017, 3, 27),
  image: "https://media.timeout.com/images/103555466/750/422/image.jpg",
  body: "Luc Tuymans makes boring paintings. Well, kind of. The Belgian artist has always made pictures that seemingly deal with banal and everyday subject matter – but there's always more hovering behind their bleached, scratchy surfaces. In this new show, he's keeping the concept simple: portraits of people wearing glasses. ",
  gallery_id: 2
},
{
  name: "Picasso Portraits",
  artist: "Pablo Picasso",
  opening_date: DateTime.new(2016, 11, 23),
  closing_date: DateTime.new(2017, 2, 5),
  image: "https://media.timeout.com/images/103244015/750/422/image.jpg",
  body: "The Modern Lovers have a song that goes ‘Pablo Picasso never got called an asshole’. Which is surprising, because the way Pablo treated women you’d imagine that he got called a lot worse than that. Really, this show should be called ‘Picasso, Old Lech’, because his portraits tell a story of a man who didn’t just love women, but consumed them, used them, abused them and then chucked ’em aside. But we’ll get to that.

The first work you see here is a bold early self-portrait of the artist with his palette, his shirt rendered as a slab of off-white, his youthful features full of strength.

Another room finds young Pablo in Paris, lost in a world of art, friends and partying. There’s an incredibly grotesque image of his friend Gustave Coquiot in a swirl of dancers and a genuinely stunning Blue Period portrait of Sebastia Junyer i Vidal.

Then Picasso heads into cubism, thanks in part to the model Fernande Olivier, who features in so many of his works. Portraits of her and one absolute stunner depicting the art dealer Daniel-Henry Kahnweiler find Picasso on the path to greatness.

You then walk through a corridor of Picasso’s caricatures – which are interesting more than brilliant – and a room of almost totally unflattering portraits of his first wife Olga. But don’t be surprised that a lot of the paintings here far from good. Picasso created a lot of work, and any show of his is bound to include a good fistful of guff.

The last room – the show's biggest and best – is where everything starts to make sense. There’s a near total lack of men, it’s just Picasso stumbling from woman to woman, from marriage to affair to marriage to affair, and he documents his lust in paint. There’s Dora Maar as a flattened assemblage of soft lumps, Marie-Thérèse Walter as a gently undulating collection of primary coloury, a stunning fragile vision of Nusch Eluard, a twisted rendering of Lee Miller and an image of his last wife Jacqueline Roque in a headscarf staring straight out at you, patient as a saint.

This room is a document of lust, of avarice and selfishness, of love that bloomed and faded. Regret only seems to shine through in one painting, depicting his by-then ex-lover sat behind their children as they draw – it’s the only image tinged with a sense of ‘whoops, maybe I should’ve been a bit less of a shit’.

You might be thinking that all this is irrelevant, that you should take the paintings at face value. But that’s the thing about portraiture: it’s never just about the paint on the canvas, it’s about the story being told, the person being depicted, the why, the when, the how. You don’t leave this show thinking Picasso was any worse an artist than you went in thinking he was, but you might leave thinking less of him as a person. Even when they're not all great, getting to walk through room after room of Picassos is always going to be a treat. It’s just a shame he was such an asshole.",
  gallery_id: 2
}])
