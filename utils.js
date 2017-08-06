
exports.POST = app.post('/', (req, res) => {

                Book.create({title: this.newTitle }).then((results) => {
                  res.status(200).send(results);
                  console.log('RESULTS FROM POST ARE: ', results.title);
                })
                .catch((err) => {
                  console.log('Oops! Error in POST request: ', err);
                });
              });