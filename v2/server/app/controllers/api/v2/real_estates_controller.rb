class Api::v2::RealEstatesController < ApplicationController

    def index
        real_estates = RealEstate.all
        render json: RealEstateSerializer.new(real_estates)
    end

    def show
        real_estate = RealEstate.find(params[:id])
        render json: RealEstateSerializer.new(real_estate)
    end

    def create
        real_estate = RealEstate.find_or_create_by(address: real_estate_params[:address])
        render json: RealEstateSerializer.new(real_estate)
    end

    private

    def real_estate_params
        params.require(:real_estate).permit(:address, :purchase_price, :units, :unit_rent)
    end

end