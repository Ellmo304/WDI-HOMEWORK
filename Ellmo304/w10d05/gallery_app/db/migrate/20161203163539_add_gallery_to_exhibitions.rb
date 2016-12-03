class AddGalleryToExhibitions < ActiveRecord::Migration[5.0]
  def change
    add_reference :exhibitions, :gallery, foreign_key: true
  end
end
