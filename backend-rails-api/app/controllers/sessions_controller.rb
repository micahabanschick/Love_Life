class SessionsController < ApplicationController

    def login 
        respond_to do |format|
            format.json
         end
        render json: { test: "success" }
    end 

end 