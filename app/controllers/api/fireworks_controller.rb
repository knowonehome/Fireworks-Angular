class Api::FireworksController < ApplicationController
    before_action :set_firwork, only: [:show, :update, :destroy]
    respond_to :json

    def index
        @fireworks = Firework.all
        render json: @fireworks
    end
    
    def show
        render json: @fireworks
    end
    
    def create
        @firework = Firework.new(firework_params)
        if @firework.save
            render json: @firework
        else
            render json: @firework.errors, status: :unprocessable_entity
        end
    end

    def update
        if @firework.update(firework_params)
            render json: @firework
        else
            render json: @firework.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @firework.destroy
        head :no_content
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_firework
        @firework = Firework.find(params[:id])
    end
    
    # Never trust parameters from the scary internet, only allow the white list through.
    def firework_params
        params.require(:firework).permit(:name, :style, :description)
    end
end
