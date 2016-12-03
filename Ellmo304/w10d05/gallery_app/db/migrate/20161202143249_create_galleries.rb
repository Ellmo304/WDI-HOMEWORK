class CreateGalleries < ActiveRecord::Migration[5.0]
  def change
    create_table :galleries do |t|
      t.string :name
      t.string :address
      t.string :nearest_tube
      t.string :image
      t.text :body

      t.timestamps
    end
  end
end
