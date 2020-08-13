Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
     resources :weather
    end
   end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
