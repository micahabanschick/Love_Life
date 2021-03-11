class User < ApplicationRecord
    # has_secure_password
    has_many :expenses
    has_many :real_estates
end
