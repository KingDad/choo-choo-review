# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Train.delete_all
User.delete_all
Review.delete_all
Vote.delete_all

redline = Train.create(name: "red", description: "The Red Line is a rapid transit line operated by the Massachusetts Bay Transportation Authority (MBTA). It runs roughly northwest-to-southeast across Cambridge and Davis Square in Somerville – from Alewife in North Cambridge to Kendall/MIT in Kendall Square – with a connection to commuter rail at Porter. It then crosses over the Longfellow Bridge into downtown Boston, where it connects with the Green Line at Park Street, the Orange Line at Downtown Crossing, the Silver Line at South Station, as well as Amtrak and commuter rail at the South Station surface terminal before passing through South Boston and Dorchester. South of JFK/UMass in Dorchester, it splits into two branches terminating at Braintree and Ashmont stations; transfers to commuter rail are again possible at JFK/UMass, Quincy Center, and Braintree. From Ashmont, passengers may continue to Mattapan via the Ashmont–Mattapan High Speed Line, a 2.6-mile (4.2 km) light rail line.
All operating Red Line stations are handicapped accessible except Valley Road on the Ashmont-Mattapan High Speed Line. The Wollaston station on the Braintree branch is closed until the summer of 2019 for renovations that will make it fully accessible.", founding_year: "1872-06-13")

greenline = Train.create(name: "green", description: "The Green Line is a light rail system run by the Massachusetts Bay Transportation Authority (MBTA) in the Boston, Massachusetts, metropolitan area. It is the oldest Boston subway line, and with tunnel sections dating from 1897, the oldest in America. It runs underground through downtown Boston, and on the surface on several radial boulevards and into inner suburbs. With an average daily weekday ridership of 169,600 in 2018, it is the third most heavily used light rail system in the country. The line was assigned the green color in 1967 during a systemwide rebranding because several branches pass through sections of the Emerald Necklace of Boston.
The four branches are the remnants of a large streetcar system, which began in 1856 with the Cambridge Horse Railroad and was consolidated into the Boston Elevated Railway several decades later. The Tremont Street Subway – the oldest subway tunnel in North America – opened its first section on September 1, 1897, to take streetcars off overcrowded downtown streets; it was extended five times over the next five decades. The streetcar system peaked in size around 1930 and was gradually replaced with trackless trolleys and buses, with cuts as late as 1985. A new branch opened on a converted commuter rail line in 1959; the Green Line Extension project will add two new branches into Somerville and Medford in 2021.", founding_year: "1612-06-13")

orangeline = Train.create(name: "orange", description: "The Orange Line is one of the four subway lines of the Massachusetts Bay Transportation Authority. It extends from Forest Hills in Jamaica Plain, Boston in the south to Oak Grove in Malden in the north. It meets the Red Line at Downtown Crossing, the Blue Line at State, and the Green Line at Haymarket and North Station. It connects with Amtrak service at Back Bay and North Station, and with MBTA Commuter Rail service at Back Bay, North Station, Forest Hills, Ruggles station in Roxbury, and Malden Center in Malden. From 1901 to 1987, it provided the first elevated rapid transit in Boston; the last elevated section was torn down in 1987 when the southern portion of the line was moved to the Southwest Corridor.
All stations on the Orange Line are handicapped accessible. These stations are equipped with high-level platforms for easy boarding, as well as elevators for easy platform access.", founding_year: "1312-06-13")

blueline = Train.create(name: "blue", description: "The Blue Line is a rapid transit line in the Greater Boston metropolitan area, one of four rapid transit lines operated by the Massachusetts Bay Transportation Authority (MBTA). It runs from Bowdoin station in downtown Boston under Boston Harbor to East Boston and Revere on the inner North Shore, where it terminates at Wonderland. The stop at Airport Station, by way of a free shuttle bus, is one of two rapid transit connections to Logan International Airport. In 1967, during a systemwide rebranding, the line was assigned the blue color because it passes under the Boston Harbor. With an end-to-end travel time of less than twenty minutes, the Blue Line is the shortest of Boston's heavy-rail lines and the only line to have both third rail and overhead catenary sections.
The East Boston Tunnel was built as a streetcar tunnel in 1904; after an extension to Bowdoin in 1916, it was converted to heavy rail metro rolling stock in 1924. In 1952 and 1954 the line was extended along the former route of the Boston, Revere Beach and Lynn Railroad, in a project intended to reach Lynn but ultimately cut short to Wonderland. Further extensions to Lynn and Charles/MGH downtown are long-planned but not yet funded. From approximately 1998-2011, the MBTA made most Blue Line stations fully accessible as part of a larger effort to accommodate 6-car trains on the line. As of 2018, the only station in service on the Blue Line which is not fully accessible is the downtown Boston terminus Bowdoin.", founding_year: "1523-06-13")

peter = User.create(email:'peter@email.com', password:'123456')
keegan = User.create(email:'keegan@email.com', password:'123456')
tasneem = User.create(email:'tasneem@email.com', password:'123456')
joe = User.create(email:'joe@email.com', password:'123456')
andrew = User.create(email:'andrew@email.com', password:'123456')

redline1 = Review.create(train_id: redline.id, user_id: keegan.id, description: "This line does not have any lights. I am very disappointed by the lack of lighting. I was not able to take my modeling photos for my portfolio.", rating: 2)
redline2 = Review.create(train_id: redline.id, user_id: tasneem.id, description: "I ride this train everyday to my classes! It sometimes is even running on time!", rating: 4)
greenline1 = Review.create(train_id: greenline.id, user_id: peter.id, description: "I could run faster than this thing! Should have taken a Lyft, smh. Get new trains, and less stops. Why can i see and walk to the next stop in less than 5 mins from the current stop I'm at? Bad design.", rating: 1)
greenline2 = Review.create(train_id: greenline.id, user_id: joe.id, description: "It's a train! on the street! Wild!! Could probably hit more cars during the trips to make it more entertaining.", rating: 4)
orangeline1 = Review.create(train_id: orangeline.id, user_id: andrew.id, description: "This train is infact orange. What a pleasent surprise! It could use new cars I think, but the stops are in good locations to access the various neighborhood high roads.", rating: 5)
orangeline2 = Review.create(train_id: orangeline.id, user_id: keegan.id, description: "This line is fun. I meet so many great people and make long lasting relationships whenever I ride this train. I met by best friend Buttons on this train. They will be officiating my wedding this weekend.", rating: 5)
blueline1 = Review.create(train_id: blueline.id, user_id: peter.id, description: "Yo! This one takes you to a beach! Wonderland is the best name for that stop too. There is a beach at that stop. Beaches!", rating: 5)
blueline2 = Review.create(train_id: blueline.id, user_id: tasneem.id, description: "I take this train to the aquarium AND the airport. What a concept! The portion of this train that goes under the bay could show what it looks like under the water. Could improve there.", rating: 4)

Vote.create(user_id: peter.id, review_id: redline1.id, vote_type: "up")
Vote.create(user_id: peter.id, review_id: redline2.id, vote_type: "up")
Vote.create(user_id: joe.id, review_id: redline1.id, vote_type: "down")
Vote.create(user_id: joe.id, review_id: redline2.id, vote_type: "up")
Vote.create(user_id: tasneem.id, review_id: redline1.id, vote_type: "down")
Vote.create(user_id: tasneem.id, review_id: redline2.id, vote_type: "down")
Vote.create(user_id: keegan.id, review_id: redline1.id, vote_type: "up")
Vote.create(user_id: keegan.id, review_id: redline2.id, vote_type: "down")
Vote.create(user_id: andrew.id, review_id: redline1.id, vote_type: "down")
Vote.create(user_id: andrew.id, review_id: redline2.id, vote_type: "up")
