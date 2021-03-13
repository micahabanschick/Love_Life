class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user)
    end

    def create
        user = User.find_or_create_by(name: params[:_name], password: params[:_password], monthly_income: params[:_monthly_income])
        render json: UserSerializer.new(user)
    end

    def update
        user = User.find_or_create_by(name: params[:_name], password: params[:_password])
        user.monthly_income = params[:_monthly_income]
        user.save
        render json: UserSerializer.new(user)
    end 

end