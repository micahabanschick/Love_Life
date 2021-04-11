class ExpensesController < ApplicationController

    def index
        expenses = Expense.all
        render json: ExpenseSerializer.new(expenses)
    end

    def show
        expense = Expense.find(params[:id])
        render json: ExpenseSerializer.new(expense)
    end

    def create
        # Expense.destroy_all
        expense = Expense.find_or_create_by(category: params["_category"], index: params["_index"], price: params["_price"], user_id: params["_userID"])
        expense.user.monthly_income += expense.price
        # expense = Expense.find_by_category_and_index(params[:_expenses][0][:_category], params[:_expenses][0][:_index])
        render json: ExpenseSerializer.new(expense)
    end

end