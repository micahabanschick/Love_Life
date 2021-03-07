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
        expense = Expense.find_or_create_by(name: expense_params[:name])
        render json: ExpenseSerializer.new(expense)
    end

    private

    def expense_params
        params.require(:expense).permit(:name, :price, :type)
    end

end