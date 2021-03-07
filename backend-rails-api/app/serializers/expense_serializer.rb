class ExpenseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :price, :type
  belongs_to :real_estate 
  belongs_to :user
end
