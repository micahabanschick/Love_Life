class Expense < ApplicationRecord
    belongs_to :user
    belongs_to :real_estate
end
