class AddMeaningsToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :upright, :string
    add_column :cards, :reversed, :string
  end
end
