# TODO: Write documentation for `Downloader`
require "http/client"

module Downloader
  VERSION = "0.1.0"

  def self.download(@@url : String, @@filename : String)
    HTTP::Client.get(url) do |response|
      if response.status_code == 200
        File.write(filename, response.body_io)
      end
    end
  end
end
