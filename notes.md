API Endpoint for sermon Categories
"https://media.faithbaptistkirksville.org/wp-json/wp/v2/categories?parent=3&per_page=100"

curl -s https://media.faithbaptistkirksville.org/wp-json/wp/v2/categories?per_page=100 | jq '.[].name'
