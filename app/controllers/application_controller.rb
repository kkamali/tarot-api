class ApplicationController < ActionController::API
  def fallback_index_html
    render :file => '../../../rose_hunter_tarot/public'
  end
end
