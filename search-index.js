crystal_doc_search_index_callback({"repository_name":"downloader","body":"# downloader\n\n[![GitHub release](https://img.shields.io/github/release/trollmao/downloader.svg)](https://github.com/trollmao/downloader/releases)\n\nEasy way to download files via Crystal.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     downloader:\n       github: trollmao/downloader\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"downloader\"\n```\n\nDownload a file:\n\n```crystal\nurl = \"https://avatars.githubusercontent.com/u/88042940?v=4\"\nfilename = \"avatar.png\"\nDownloader.download(url, filename)\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/trollmao/downloader>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [trollmao](https://github.com/your-github-user) - creator and maintainer\n","program":{"html_id":"downloader/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"downloader","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"downloader/Downloader","path":"Downloader.html","kind":"module","full_name":"Downloader","name":"Downloader","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/downloader.cr","line_number":4,"url":"https://github.com/trollmao/downloader/blob/a64272f14859d1b810a5738ba7fb291e2ecdfd20/src/downloader.cr#L4"}],"repository_name":"downloader","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[{"html_id":"download(url:String,filename:String)-class-method","name":"download","doc":null,"summary":null,"abstract":false,"args":[{"name":"url","doc":null,"default_value":"","external_name":"url","restriction":"String"},{"name":"filename","doc":null,"default_value":"","external_name":"filename","restriction":"String"}],"args_string":"(url : String, filename : String)","args_html":"(url : String, filename : String)","location":{"filename":"src/downloader.cr","line_number":7,"url":"https://github.com/trollmao/downloader/blob/a64272f14859d1b810a5738ba7fb291e2ecdfd20/src/downloader.cr#L7"},"def":{"name":"download","args":[{"name":"url","doc":null,"default_value":"","external_name":"url","restriction":"String"},{"name":"filename","doc":null,"default_value":"","external_name":"filename","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@url = url\n@@filename = filename\nHTTP::Client.get(url) do |response|\n  if response.status_code == 200\n    File.write(filename, response.body_io)\n  end\nend\n"}}],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}})