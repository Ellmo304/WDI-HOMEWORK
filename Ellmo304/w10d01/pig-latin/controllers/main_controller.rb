

get "/" do
  erb :home
end

post "/translation" do
  @answer = PigLatin.translate(params[:words])
  erb :translation
end
