# downloader

[![GitHub release](https://img.shields.io/github/release/crystal-libs/downloader.svg)](https://github.com/crystal-libs/downloader/releases)

Easy way to download files via Crystal.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     downloader:
       github: crystal-libs/downloader
   ```

2. Run `shards install`

## Usage

```crystal
require "downloader"
```

Download a file:

```crystal
url = "https://avatars.githubusercontent.com/u/88042940?v=4"
filename = "avatar.png"
Downloader.download(url, filename)
```

## Contributing

1. Fork it (<https://github.com/crystal-libs/downloader>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [gxfr](https://github.com/gxfr) - creator and maintainer
