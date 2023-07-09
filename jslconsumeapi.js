
// list of free api websites
// https://apipheny.io/free-api/

fetch('http://universities.hipolabs.com/search?country=Ethiopia') //United+States')
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data

    // {
    //     country: 'Ethiopia',
    //     name: 'Addis Ababa Science & Technology University',
    //     'state-province': null,
    //     domains: [ 'aastu.org' ],
    //     alpha_two_code: 'ET',
    //     web_pages: [ 'http://www.aastu.org/' ]
    //   },
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.log('Error:', error);
  });
