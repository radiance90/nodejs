////res.append(field [, value])////
res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
res.append('Warning', '199 Miscellaneous warning');


////res.attachment([filename])//
res.attachment('path/to/logo.png');

////res.cookie(name, value [, options])////
res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
res.cookie('cart', { items: [1,2,3] });
res.cookie('cart', { items: [1,2,3] }, { maxAge: 900000 });


////res.clearCookie(name [, options])////
res.cookie('name', 'tobi', { path: '/admin' });
res.clearCookie('name', { path: '/admin' });


////res.download(path [, filename] [, fn])////
res.download('/report-12345.pdf');
res.download('/report-12345.pdf', 'report.pdf');
res.download('/report-12345.pdf', 'report.pdf', function(err){
});


////res.end([data] [, encoding])////
res.end();
res.status(404).end();


////res.format(object)////
res.format({
   'text/plain': function(){
      res.send('hey');
   },
   'text/html': function(){
      res.send('hey');
   },
   'application/json': function(){
      res.send({ message: 'hey' });
   },
   'default': function() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
   }
});


////res.get(field)////
res.get('Content-Type');

////res.json([body])////
res.json(null)
res.json({ user: 'tobi' })
res.status(500).json({ error: 'message' })

////res.links(links)////
res.links({
   next: 'http://api.example.com/users?page=2',
   last: 'http://api.example.com/users?page=5'
});

////res.location(path)////
res.location('/foo/bar');
res.location('foo/bar');
res.location('http://example.com');

////res.redirect([status,] path)////
res.redirect('/foo/bar');
res.redirect('http://example.com');
res.redirect(301, 'http://example.com');

////res.render(view [, locals] [, callback])////
// send the rendered view to the client
res.render('index');
// pass a local variable to the view
res.render('user', { name: 'Tobi' }, function(err, html) {
   // ...
});


////res.send([body])////
res.send(new Buffer('whoop'));
res.send({ some: 'json' });
res.send('some html');


////res.sendFile(path [, options] [, fn])////
res.sendFile(fileName, options, function (err) {
   // ...
});

////res.sendStatus(statusCode)////
res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')


////res.set(field [, value])////
res.set('Content-Type', 'text/plain');
res.set({
   'Content-Type': 'text/plain',
   'Content-Length': '123',
   'ETag': '12345'
})

////res.status(code)////
res.status(403).end();
res.status(400).send('Bad Request');
res.status(404).sendFile('/absolute/path/to/404.png');

////res.type(type)////
res.type('.html');              // => 'text/html'
res.type('html');               // => 'text/html'
res.type('json');               // => 'application/json'
res.type('application/json');   // => 'application/json'
res.type('png');                // => image/png:
