BreezyPDF.setup do |config|
    # config.secret_api_key = "sk_0c5887a8d117fddcda40d933634948a9"
    config.secret_api_key = ENV["BREEZY_PDF_API_KEY"]
end
