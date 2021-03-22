class UsersController < ApplicationController

    def index
        user = User.all[0]
        render json: UserSerializer.new(user)
    end

    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user)
    end

    def create
        # User.destroy_all
        user = User.find_or_create_by(name: params["_name"], password: params["_password"])
        # expenses = params["_expenses"]
        # if expenses.length > 0
        #     expense = Expense.find_by(category: params["_expenses"][0]["_category"], index: params["_expenses"][0]["_index"])
        #     if !!expense 
        #         expense.delete
        #     end
        #     user.expenses.build(category: params["_expenses"][0]["_category"], index: params["_expenses"][0]["_index"], price: params["_expenses"][0]["_price"])
        # end
        render json: UserSerializer.new(user)
    end

    def update
        user = User.find_or_create_by(name: params[:_name], password: params[:_password])
        user.monthly_income = params[:_monthly_income]
        user.save
        render json: UserSerializer.new(user)
    end 

    def destroy
        session[:user_id] = nil
    end

end