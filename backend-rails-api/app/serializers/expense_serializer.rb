class ExpenseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :category, :index, :price
  belongs_to :real_estate 
  belongs_to :user
end
