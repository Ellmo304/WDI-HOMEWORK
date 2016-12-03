# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161203173337) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exhibitions", force: :cascade do |t|
    t.string   "name"
    t.string   "artist"
    t.date     "opening_date"
    t.date     "closing_date"
    t.string   "image"
    t.text     "body"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "gallery_id"
    t.index ["gallery_id"], name: "index_exhibitions_on_gallery_id", using: :btree
  end

  create_table "galleries", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "nearest_tube"
    t.string   "image"
    t.text     "body"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string   "title"
    t.string   "author"
    t.date     "date"
    t.text     "body"
    t.integer  "rating"
    t.integer  "user_id"
    t.integer  "exhibition_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["exhibition_id"], name: "index_reviews_on_exhibition_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "exhibitions", "galleries"
  add_foreign_key "reviews", "exhibitions"
  add_foreign_key "reviews", "users"
end
