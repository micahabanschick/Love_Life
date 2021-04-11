class Api::V2::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        options = {
            include: [:expenses]
        }
        render json: UserSerializer.new(@user, options)
    end

    def create
        @user = User.find_or_create_by(user_params)
        options = {
            include: [:expenses]
        }
        render json: UserSerializer.new(@user, options)
    end

    def update
        # binding.pry
        @user = User.find(params[:id])
        @user.update(user_params)
        @user.save
        options = {
            include: [:expenses]
        }
        render json: UserSerializer.new(@user, options)
    end 

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: {message: 'This User is successfully deleted'}
    end

    private

    def user_params
        params.require(:user).permit(:name, :password)
    end

end