# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

technologies = [ 'html', 'css', 'javascript', 'ruby', 'ruby on rails',
                 'bootstrap', 'jquery', 'turbolinks','heroku', 'potsgresql',
                 'webpack', 'api', 'geocoder', 'httparty', 'uploader', 'admin',
                 'pundit' ]

technologies.each do |technology|
  Technology.create(name: technology)
end

puts "Technologies created!"

projects = [
  {
    title: "opb architecture",
    project_type: "full-stack",
    content: "Opb is young architecture agency. I wanted to create
              a simple, design, and functionnal portfolio for them. The admin
              interface is completed as posible.",
    image: "http://res.cloudinary.com/dto9foc0m/image/upload/v1523829855/opb.png",
    link: "https://opbapp.herokuapp.com/",
    github: "https://github.com/OlivierRiccini/opb-app",
    used_technologies: [ 'html', 'css', 'javascript', 'ruby', 'ruby on rails',
                         'bootstrap', 'jquery', 'turbolinks', 'heroku',
                         'potsgresql', 'webpack', 'uploader', 'admin' ]
  },
  {
    title: "gamiflex",
    project_type: "full-stack",
    content: "Final Project for Le Wagon Coding Bootcamp. In 10 days, our team
              built a webapp that takes a gamer's preferences and uses that to
              suggest their next video game!",
    image: "http://res.cloudinary.com/dto9foc0m/image/upload/v1523829853/gamiflex.png",
    link: "http://www.gamiflex.com/",
    github: "https://github.com/OlivierRiccini/gamiflex",
    used_technologies: [ 'html', 'css', 'javascript', 'ruby', 'ruby on rails',
                         'bootstrap', 'jquery', 'turbolinks','heroku', 'potsgresql',
                         'webpack', 'api', 'httparty', 'pundit', 'uploader' ]
  },
  {
    title: "montresor",
    project_type: "full-stack",
    content: "Montresor is a MVP of a Marketplace where you can buy and sell all
              kinds of stuff in Montreal. It was built during Le Wagon bootcamp
              in only 5 days!.",
    image: "http://res.cloudinary.com/dto9foc0m/image/upload/v1523829839/montresor.png",
    link: "http://montresor-72.herokuapp.com/",
    github: "https://github.com/OlivierRiccini/montresor",
    used_technologies: [ 'html', 'css', 'javascript', 'ruby', 'ruby on rails',
                         'bootstrap', 'jquery', 'turbolinks','heroku', 'potsgresql',
                         'webpack', 'api', 'pundit', 'uploader' ]
  },
  {
    title: "skills-sports-management",
    project_type: "front-end",
    content: "Build a one page website in two days was the challenge Skills
              Sports Management proposed me. Challenge accepted!
              Two days later the website was delivered.",
    image: "http://res.cloudinary.com/dto9foc0m/image/upload/v1523829848/skills-sports.png",
    link: "https://olivierriccini.github.io/skills-sports/",
    github: "https://github.com/OlivierRiccini/skills-sports",
    used_technologies: [ 'html', 'css', 'javascript', 'bootstrap' ]
  },
]

puts "Projects created!"

projects.each do |project|
  new_project = Project.new( title: project[:title], project_type: project[:project_type], content: project[:content],
              link: project[:link], github: project[:github] )
  new_project.remote_image_url = project[:image]
  new_project.save
  project[:used_technologies].each do |used_technology|
    technology_id = Technology.where(name: used_technology).take.id
    UsedTechnology.create(project_id: new_project.id, technology_id: technology_id)
  end
end

inho_admin = User.new(email: "info@olivierriccini.com", password: "Ronaldor99", admin: true)
inho_admin.remote_avatar_url = "http://res.cloudinary.com/dto9foc0m/image/upload/v1524169788/avatar-black-white.png"
inho_admin.save

puts "Finished with succès!"
