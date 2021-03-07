class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :name
      t.integer :price
      t.string :type
      t.integer :real_estate_id
      t.integer :user_id

      t.timestamps
    end
  end
end
