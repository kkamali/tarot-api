Rails.application.routes.draw do
  resources :cards, only: [:index, :show]
  get '/spreads/:spread', to: 'cards#spread'
  get '*path', to: 'application#fallback_index_html', constraints: ->(request) do
      !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
