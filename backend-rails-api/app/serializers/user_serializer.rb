class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :password_digest, :monthly_income
  has_many :expenses
  has_many :real_estates
end
