const test = require('tape');
const remark = require('remark');
const lint = require('remark-lint');
const alphabetizeLists = require('./');

const processor = remark().use(lint).use(alphabetizeLists);

const nok = `* [An Awesome Book](http://example.com/example.html)

### Example
* [Another Awesome Book](http://example.com/book.html)

* [Some Other Book](http://example.com/other.html)
`;

const ok = `* [An Awesome Book](http://example.com/example.html)


### Example

* [Another Awesome Book](http://example.com/book.html)
* [Some Other Book](http://example.com/other.html)
`;

test('remark-lint-alphabetize-lists', (t) => {
  t.deepEqual(
    processor.processSync(ok).messages.map(String),
    [],
    'should work on valid fixtures'
  );

  t.deepEqual(
    processor.processSync(nok).messages.map(String),
    [
      '1:1-1:53: Incorrect number of blank lines between last section and next heading',
      '3:1-3:12: Incorrect number of blank lines between heading and section'
    ],
    'should work on valid fixtures'
  );

  t.end();
});
