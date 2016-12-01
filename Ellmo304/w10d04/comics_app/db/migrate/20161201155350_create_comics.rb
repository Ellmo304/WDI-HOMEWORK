class CreateComics < ActiveRecord::Migration[5.0]
  def change
    create_table :comics do |t|
      t.string :title
      t.string :author
      t.string :image
      t.integer :issue

      t.timestamps
    end
  end
end
