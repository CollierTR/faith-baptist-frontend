
# API Endpoints

**API Endpoint for sermon Categories**
"https://media.faithbaptistkirksville.org/wp-json/wp/v2/categories?parent=3&per_page=100"

curl -s https://media.faithbaptistkirksville.org/wp-json/wp/v2/categories?per_page=100 | jq '.[].name'


# To-do list
## Structure

- [ ] About
  - [ ] Download: Constitution
  - [ ] Page: statement of faith

- [ ] Resources
  - [ ] Links
  - [ ] Hymn App
  - [ ] Counciling
    - [ ] What is BC?
    - [ ] Do you need BC?
    - [ ] BC Resources

- [ ] Blog (just like the Sermon page)

# To-do for Cliff
- Need to re-date the blog articles if possible (I can do this if needed)
- Need to expose a speaker attribute as an extension in the api
- Pull in the new sermons
- train Brandon and me on editing the content
