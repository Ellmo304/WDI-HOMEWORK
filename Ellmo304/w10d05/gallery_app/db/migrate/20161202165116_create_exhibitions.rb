class CreateExhibitions < ActiveRecord::Migration[5.0]
  def change
    create_table :exhibitions do |t|
      t.string :name
      t.string :artist
      t.date :opening_date
      t.date :closing_date
      t.string :image
      t.text :body

      t.timestamps
    end
  end
end
