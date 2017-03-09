class CreateAlternateNames < ActiveRecord::Migration[5.0]
  def change
    create_table :alternate_names do |t|
      t.string :name
      t.integer :firework_id

      t.timestamps
    end
  end
end
