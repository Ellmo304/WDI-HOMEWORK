

get "/" do
  erb :home
end

post "/translation" do
  @translation = params[:words]
  @answer = PigLatin.translate(@translation)
  erb :translation
end
