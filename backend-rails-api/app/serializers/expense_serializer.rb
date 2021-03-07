class ExpenseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :price, :type
end
