class Api::v2::ExpensesController < ApplicationController
    
    before_action :set_user

    def index
        @expenses = User.find_by(id: params[:user_id]).expenses
        render json: ExpenseSerializer.new(@expenses)
    end

    def show
        @expense = Expense.find_by(params[:id])
        render json: ExpenseSerializer.new(@expense)
    end

    def create
        @expense = @user.expenses.build(expense_params)
        @expense.save 
        render json: expenseSerializer.new(@expense)
    end

    def update
        @expense = Expense.find(params[:id])
        @expense.update(expense_params)
        @expense.save
        render json: UserSerializer.new(@expense)
    end

    def destroy
        @expense = Expense.find(params[:id])
        @expense.destroy
        render json: UserSerializer.new(@expense)
    end

    private

    def set_user
        @user = User.find_by(params[:user_id])
    end

    def expense_params
        params.require(:expense).permit(:category, :index, :price, :user_id)
    end

end