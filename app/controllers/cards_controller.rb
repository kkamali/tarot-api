class CardsController < ApplicationController
  def index
    cards = Card.all
    render json: cards
  end

  def show
    card = Card.find(params[:id])
    render json: card
  end

  def spread
    spread = params[:spread]
    cards = []
    case spread
    when 'dragonfly'
      cards = make_spread(9)
    when 'advice'
      cards = make_spread(3)
    when 'love'
      cards = make_spread(6)
    when 'dreaming'
      cards = make_spread(5)
    when 'pathways'
      cards = make_spread(8)
    end
    if cards.length > 0
      render json: cards
    else
      render json: {error: "No spread selected"}
    end
  end

  private

  def card_params(params)
    params.require(:card).permit(:id, :spread)
  end

  def draw_card
    Card.find(rand(1..17))
  end

  def make_spread(cards_needed)
    drawn = []
    while drawn.length < cards_needed
      card = draw_card()
      if !drawn.include? card
        card.is_reversed = [true,false].sample
        drawn << card
      end
    end
    drawn
  end
end
