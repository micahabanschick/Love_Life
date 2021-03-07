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
        user = User.find_or_create_by(name: user_params[:name])
        render json: UserSerializer.new(user)
    end

    private

    def user_params
        params.require(:user).permit(:name, :password, :monthly_income)
    end

end