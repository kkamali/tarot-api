class AddIsReversedToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :is_reversed, :boolean
  end
end
