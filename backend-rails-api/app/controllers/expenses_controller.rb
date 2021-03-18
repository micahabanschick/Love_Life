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
        Expense.destroy_all
        expense = Expense.find_or_create_by(category: params[:_category], index: params[:_index], price: params[:_price])
        render json: ExpenseSerializer.new(expense)
    end

end