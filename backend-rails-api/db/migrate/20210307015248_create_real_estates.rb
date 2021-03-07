class CreateRealEstates < ActiveRecord::Migration[6.0]
  def change
    create_table :real_estates do |t|
      t.string :address
      t.integer :purchase_price
      t.integer :units
      t.integer :unit_rent
      t.integer :user_id

      t.timestamps
    end
  end
end
