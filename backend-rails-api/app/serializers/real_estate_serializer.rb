class RealEstateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :address, :purchase_price, :units, :unit_rent
  has_many :expenses
  belongs_to :user
end
