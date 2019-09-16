# Contributing

## Setup
Fork this repo and use [GitHub Pages](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) to deploy.

## Testing it Locally
Also you can run and test it locally. Here is a quick write-up of the necessary steps:

1.	Download and install Ruby installer for Windows (2.4.3): https://rubyinstaller.org/downloads/
2.	Launch command, install Jekyll and Bundler: 'gem install jekyll bundler'
3.	Git clone the doc repo: 'git clone https://github.com/Microsoft/azure-iot-developer-kit.git'
4.	Go into the doc repo cloned and update the submodules: 'git submodule update --init --recursive'
5.	Go into the /docs folder within the repo, and install the necessary bundles for Jekyll: 'bundle install'
6.	Now in the /docs folder, start the local server: 'bundle exec jekyll serve'
7.	Open 'http://localhost:4000' in browser you should see the local docs
8.	Update any markdown or update the image fill trigger the auto rebuild, you should reload the browser to see the changes.
