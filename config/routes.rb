Rails.application.routes.draw do
  resources :cards, only: [:index, :show]
  get '/spreads/:spread', to: 'cards#spread'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
