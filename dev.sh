export $(cat dev.env | xargs)
nodemon --inspect .