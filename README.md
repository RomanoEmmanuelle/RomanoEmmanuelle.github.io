# Romano Emmanuelle’s website

Personal academic website: https://romanoemmanuelle.github.io/

Built with Jekyll and the [Academic Pages theme](https://academicpages.github.io/). Theme attribution and licensing are retained in `LICENSE`.

## Updating the website

- Edit page content in `_pages/`.
- Edit the navigation in `_data/navigation.yml`.
- Store public PDFs in `files/` and images in `images/`.
- Edit site settings in `_config.yml`.
- Commit changes to `master`; GitHub Pages builds and publishes the website automatically.

To update a PDF while keeping its URL, replace the file using the same filename. The current Undergraduate Seminar link uses `files/Undergraduate Seminar.pdf`.

## Local preview

With Ruby and Bundler installed, run `bundle install`, then `bundle exec jekyll serve`. Open http://localhost:4000/ to preview the website.
