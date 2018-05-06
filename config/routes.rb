Rails.application.routes.draw do

  root 'pages#home'

  resources :messages, only: [ :index, :show, :new, :create, :destroy ]
  resources :appointments, only: [ :index, :show, :destroy ]



  devise_for :users
  resources :projects

  get 'inho_dashboard', to: "pages#inho_dashboard"
  get 'resume', to: "pages#resume_online"
  get 'resume_pdf', to: "pages#resume_pdf"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
