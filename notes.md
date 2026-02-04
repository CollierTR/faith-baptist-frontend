
# API Endpoints

**API Endpoint for sermon Categories**
"https://media.faithbaptistkirksville.org/wp-json/wp/v2/categories?parent=3&per_page=100"

curl -s https://media.faithbaptistkirksville.org/wp-json/wp/v2/categories?per_page=100 | jq '.[].name'


# To-do list
## Structure

- [ ] About
  - [ ] Download: Constitution
  - [ ] Page: statement of faith
- Sermon Page:
    * search feature
- Blog Page:
    * search feature


- [ ] Finishing Touches (Tristan):
    - [ ] About Page:
        - [ ] Review


# To-do for Cliff
- Pull in the new sermons
- Need to expose a speaker attribute as an extension in the api (I did a little research, It looked like a simple function, but you're the PHP guy.)
- train Brandon and Tristan on admin access and editing/adding the content
- Need to re-date the blog articles if possible (Tristan can do this if needed)
- Full Send: let's push it to Prod if everything looks good
