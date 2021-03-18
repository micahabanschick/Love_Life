class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :category
      t.integer :index
      t.integer :price
      t.integer :real_estate_id
      t.integer :user_id

      t.timestamps
    end
  end
end
