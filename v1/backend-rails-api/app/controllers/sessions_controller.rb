class SessionsController < ApplicationController

    def login 
        render json: { test: "success" }
    end 

end 