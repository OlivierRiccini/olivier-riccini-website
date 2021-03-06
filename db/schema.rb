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

ActiveRecord::Schema.define(version: 20180424214045) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.string "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "message_id"
    t.string "appointment_type"
    t.index ["message_id"], name: "index_appointments_on_message_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "object"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.string "image"
    t.string "link"
    t.string "github"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "project_type"
  end

  create_table "technologies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "used_technologies", force: :cascade do |t|
    t.bigint "project_id"
    t.bigint "technology_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_used_technologies_on_project_id"
    t.index ["technology_id"], name: "index_used_technologies_on_technology_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
    t.string "avatar"
    t.string "phone_number"
    t.string "company"
    t.string "last_name"
    t.string "first_name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "appointments", "messages"
  add_foreign_key "messages", "users"
  add_foreign_key "used_technologies", "projects"
  add_foreign_key "used_technologies", "technologies"
end
