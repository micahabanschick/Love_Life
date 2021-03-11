# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(name: "misa misa", password: "starwars", monthly_income: 3200)
user2 = User.create(name: "jar jar", password: "binks", monthly_income: 17480)
user3 = User.create(name: "luke", password: "skywalker", monthly_income: 5840)

real_estate1 = RealEstate.create(address: "12 long rd", purchase_price: 120000, units: 1, unit_rent: 1000, user_id: user1.id)
real_estate2 = RealEstate.create(address: "34 short ave", purchase_price: 340000, units: 2, unit_rent: 1200, user_id: user2.id)
real_estate3 = RealEstate.create(address: "80 big blvd", purchase_price: 380000, units: 3, unit_rent: 800, user_id: user3.id)

expense1 = Expense.create(name: "rent", price: 1000, category: "necessity", user_id: user1.id, real_estate_id: real_estate1.id)
expense2 = Expense.create(name: "couch", price: 200, category: "luxury", user_id: user2.id, real_estate_id: real_estate2.id)
expense3 = Expense.create(name: "bitcoin", price: 100, category: "investment", user_id: user3.id, real_estate_id: nil)