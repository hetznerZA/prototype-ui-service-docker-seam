FROM ruby:2.3
WORKDIR /usr/local/src
ADD . /usr/local/src/
RUN bundle install 
CMD ["bundle", "exec", "rackup", "-Ilib", "--host", "0.0.0.0", "-p", "3000"]

