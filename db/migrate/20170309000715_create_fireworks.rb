class CreateFireworks < ActiveRecord::Migration[5.0]
  def change
    create_table :fireworks do |t|
      t.string :description
      t.string :style
      t.string :name

      t.timestamps
    end
  end
end
